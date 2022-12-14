package com.harryporter.ddokbun.domain.survey.entity;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Table(name="survey")
@Entity
@Getter
public class Survey {
    @Id
    private Integer surveySeq;

    @Column(name="survey_content")
    private String surveyContent;

    @OneToMany(mappedBy = "survey",fetch = FetchType.LAZY) //one To many fetch 어차피 Lazy
    private List<SurveySelect> surveySelectList;

}
