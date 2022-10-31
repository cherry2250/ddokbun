package com.harryporter.ddokbun.domain.plant.service;


import com.harryporter.ddokbun.domain.plant.entity.WaterApply;
import com.harryporter.ddokbun.domain.plant.repository.WaterApplyRepository;
import com.harryporter.ddokbun.domain.plant.repository.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.repository.dto.response.MyPotReponse;
import com.harryporter.ddokbun.domain.plant.repository.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import com.harryporter.ddokbun.domain.plant.repository.PotRepository;
import com.harryporter.ddokbun.domain.plant.repository.PotRepositoryCustom;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class PotService {

    private final PotRepository potRepository;
    private final PotRepositoryCustom potRepositoryCustom;
    private final UserRepository userRepository;
    private final PlantRepository plantRepository;
    private final WaterApplyRepository waterApplyRepository;


    public RegisterPotResponse registerPot(RegisterPotRequest registerPotRequest, Long userSeq){
        // Plant_seq로 통해서 Plant를 받아오는 logic으로 변경하기
        Plant plant = plantRepository.findByPlantSeq(registerPotRequest.getPlantSeq()).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND, "식물을 찾을 수 없습니다.")
        );
        // Access_token으로 User을 받아오는 로직으로 변경하기
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        log.info("registerPotInfo :: potSrial : {} :: plantSeq : {} :: userSeq : {}", registerPotRequest.getPotSerial(), registerPotRequest.getPlantSeq(), userSeq);
        // RegisterPotResponse 생성자

        if (potRepository.existsByPotSerial(registerPotRequest.getPotSerial())){
            throw new GeneralException(ErrorCode.BAD_REQUEST, "이미 존재하는 화분입니다. 화분을 삭제하고 등록해주세요");
        }
        RegisterPotResponse registerPotResponse = new RegisterPotResponse(registerPotRequest.getPotSerial());
        Pot potEntity = new Pot();
        potEntity.potChange(registerPotRequest, user, plant);
        potRepository.save(potEntity);

        return registerPotResponse;
    }


    public void unregisterPot(String potSerial, Long userSeq){
        // Access_token으로 User을 받아오는 로직으로 변경하기
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot pot = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND, "해당 식물을 찾을 수 없습니다.")
        );

        log.info("UnregisterPotInfo :: potSrial : {} :: userSeq : {}", potSerial, userSeq);
        if (pot.getUser().getUserSeq().equals(userSeq)){
            potRepository.delete(pot);
        } else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }
    }


    public void applyWater(String potSerial, Long userSeq){
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );
        log.info("현재 화분 Entity와 유저 받기 :: Pot : {}, userSeq : {}", potEntity, userSeq);

        if (potEntity.getUser().getUserSeq().equals(userSeq)){

            potEntity.potWaterApllyChange(LocalDate.now());

            WaterApply waterApply = new WaterApply(potEntity);
            waterApplyRepository.save(waterApply);
        } else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }



    }

    public void changeWaterApplyMethod(String potSerial, Long userSeq) {
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );

        if (potEntity.getUser().getUserSeq().equals(userSeq)){
            // 화분의 자동, 수동을 바꾸기
            if (potEntity.getIsAuto().equals("Y")) {
                potEntity.setIsAuto("N");
            }
            else {
                potEntity.setIsAuto("Y");
            }
            potRepository.save(potEntity);
        } else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }

    }

    public List<MyPotReponse> myPot(Long userSeq) {
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        List<Pot> pots = user.getPots();
        List<MyPotReponse> myPotReponses = pots.stream().map(pot -> MyPotReponse.of(pot)).collect(Collectors.toList());
        return myPotReponses;
    }

}
