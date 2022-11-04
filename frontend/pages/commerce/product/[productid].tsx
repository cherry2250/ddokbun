import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/products/[product-id]/style";
import ProductSellCard from "../../../common/Cards/ProductSellCard";
import ProductCare from "../../../components/commerce/products/[product-id]/ProductCare";
import { ParsedUrlQuery } from "querystring";
import {
  fetchProductDetail,
  fetchRelatedProducts,
  getAllProductNumber,
} from "../../../apis/commerce";
import { ItemObject } from "../../../types/commerce/detail.interface";
import RelatedProducts from "../../../components/commerce/products/[product-id]/RelatedProducts";
import { wrapper } from "../../../store";
import { setRelatedItemList } from "../../../store/commerce";

interface IParams {
  productid: number;
}

const Product: NextPage<{ data: ItemObject }> = ({ data }) => {
  return (
    <Wrapper>
      <ProductSellCard
        itemSeq={data.itemSeq}
        itemName={data.itemName}
        itemEnName={data.itemEnName}
        itemPicture={data.itemPicture}
        itemPrice={data.itemPrice}
        tags={data.plant?.recRate.split(",")}
        originPlace={data.plant?.originPlace}
        plantZRName={data.plant?.plantZRName}
        growthWidth={data.plant?.growthWidth}
        growthHeight={data.plant?.growthHeight}
      />
      <ProductCare
        itemInfo={data.itemInfo}
        water={data.plant?.waterCycle as number}
        humid={data.plant?.growthHumid as string}
      />
      <RelatedProducts />
    </Wrapper>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: IParams[] = await getAllProductNumber();

  const paths = arr.map(productid => {
    return {
      params: { productid: String(productid) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface IProps extends ParsedUrlQuery {
  productid: string;
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  store => async context => {
    const { productid } = context.params as IProps;
    const data = await fetchProductDetail(productid);
    const { content } = await fetchRelatedProducts(productid);
    store.dispatch(setRelatedItemList(content));
    return {
      props: {
        data,
      },
    };
  },
);
