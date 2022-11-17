import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import React from "react";
import ProductCard from "../../../../common/Cards/ProductCard";
import { EleVar, WrapperVar } from "../../../../styles/animations/animation";
import { ItemObject } from "../../../../types/commerce/detail.interface";
import { ListObjectItem } from "../../../../types/commerce/list.interface";

import { Wrapper } from "./styles";

export const EleVVar = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const SurveyComplete: React.FC<{ items: ListObjectItem[] }> = ({ items }) => {
  return (
    <Wrapper>
      <div className="contents-box">
        <motion.h1 variants={EleVVar} initial="start" animate="end">
          결과를 바탕으로 식물을 추천해드릴게요
        </motion.h1>
        <motion.div
          variants={WrapperVar}
          initial="start"
          animate="end"
          className="grid"
        >
          {items.map(item => {
            return (
              <motion.div variants={EleVar} className="cards">
                <ProductCard item={item} isResponsive={false} />
              </motion.div>
            );
          })}
        </motion.div>
        <Link href={"/commerce/survey"}>
          <div className="button">다시 검사하기</div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SurveyComplete;
