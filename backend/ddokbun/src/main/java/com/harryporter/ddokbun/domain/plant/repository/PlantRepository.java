package com.harryporter.ddokbun.domain.plant.repository;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlantRepository extends JpaRepository<Plant, Long> {

    Optional<Plant> findByPlantSeq(long plantSeq);

    Plant findByPlantNameOrPlantNeName(String plantName, String plantNeName);
}
