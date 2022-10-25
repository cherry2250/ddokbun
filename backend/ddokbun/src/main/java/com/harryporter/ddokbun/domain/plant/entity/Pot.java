package com.harryporter.ddokbun.domain.plant.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Pot {

    // 화분 일련번호
    @Id
    @Column(name="pot_serial", columnDefinition = "CHAR(10) NOT NULL")
    private String potSerial;

    // 최신 온도
    @Column(name="temperature", nullable = true)
    private Double temperature;

    // 최신 습도
    @Column(name = "humidity", nullable = true)
    private Double humidity;

    // 최신 토양습도
    @Column(name = "soil_humidity", nullable = true)
    private Double soilHumidity;

    // 물 높이
    @Column(name = "water_height", nullable = true)
    private Double waterHeight;

    // 광량
    @Column(name = "light", nullable = true)
    private Double light;

    // 화분 생성 시간
    @Column(name = "created_time", nullable = false)
    private LocalDateTime createdTime;

    // 화분 등록 시간
    @Column(name = "registered_time", nullable = true)
    private LocalDateTime registeredTime;

    // 화분 정보 수정 시간
    @Column(name = "updated_time", nullable = true)
    private LocalDateTime updatedTime;

    // 식물 별명
    @Column(name = "plant_nickname", columnDefinition = "VARCHAR(40)")
    private String plantNickname;

    // 식물 등록일
    @Column(name = "plant_date", nullable = true)
    private LocalDateTime plantDate;

    // 최근 물 준 날짜
    @Column(name = "water_supply", nullable = true)
    private LocalDateTime waterSupply;

    // 물 공급 자동 수동 설정
    @Column(name = "is_auto", columnDefinition = "CHAR(1)")
    private String isAuto;

    // 식물
    @JoinColumn(name = "plant_seq", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Plant plant;

    //멤버
}