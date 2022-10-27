import React from "react";
import PageTitle from "../../../common/PageTitle";
import AddForm from "../../../components/manage/add/AddForm";
import { Wrapper } from "../../../styles/manage/add/styles";

const addPlant = () => {
  return (
    <Wrapper>
      <PageTitle isBold={true} isLink={false}>
        나의 식물 등록
      </PageTitle>
      <AddForm />
    </Wrapper>
  );
};

export default addPlant;