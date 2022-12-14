import Link from "next/link";

import React, { Dispatch, FC, SetStateAction, useState } from "react";

import {
  Button,
  BuyListButtonStyle,
  CancelButtonStyle,
  PriceButtonStyle,
  PriceTextButtonStyle,
  SubmitButtonStyle,
  SearchButtonStyle,
  LoginButtonStyle,
  StatusButtonStyle,
} from "./styles";

import RightUp from "../../assets/commerce/right-up.svg";
import Bag from "../../assets/commerce/bag.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import { putCart } from "../../apis/commerce";
import { useDispatch } from "react-redux";
import {
  setAllCartLists,
  setAllOrderLists,
  setCartLists,
} from "../../store/commerce";
import { useSelector } from "react-redux";
import { StoreState } from "../../store";
import { ItemObject } from "../../types/commerce/detail.interface";
import { ListObjectItem } from "../../types/commerce/list.interface";

export const TextBtn: React.FC<{
  children: string;
  color: string;
  path: string;
}> = ({ children, color, path }) => {
  return (
    <Link href={path}>
      <Button color={color}>{children}</Button>
    </Link>
  );
};

export const SearchBtn: React.FC<{
  children: string;
  color: string;
  path: string;
}> = ({ children, color, path }) => {
  return (
    <Link href={path}>
      <SearchButtonStyle color={color}>{children}</SearchButtonStyle>
    </Link>
  );
};

// 컨벤션 다름! Btn vs Button 중에 선택해야 할듯

/**
 * Product List에서 Product Detail로 이동시키는 버튼
 *
 * @param {number} id  Product Detail Id
 * @return {void} Product Detail로 이동시킴
 */
export const BuyTextButton: React.FC<{ id: number }> = ({ id }) => {
  return (
    // <Link href={`/commerce/product/${id}`}>
    <PriceTextButtonStyle>
      <h3>Buy</h3>
      <RightUp />
    </PriceTextButtonStyle>
    // </Link>
  );
};

export const BuyButton: React.FC<{ id: number; data: ListObjectItem }> = ({
  id,
  data,
}) => {
  const dataArray = [data];
  const route = useRouter();
  const dispatch = useDispatch();
  const putCartHandler = () => {
    dispatch(setAllOrderLists(dataArray));
    route.push("/commerce/order/order-form");
  };
  return (
    <PriceButtonStyle onClick={putCartHandler}>
      <h3>Buy Now</h3>
    </PriceButtonStyle>
  );
};

/**
 * Product Detail에서 장바구니로 이동시키는 버튼
 *
 * @params {number} id Product Detail Id
 * @returns Alert를 활용하여 장바구니로 이동시키거나 확인할 수 있음
 */
export const BuyListButton: React.FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();
  // const baguni = useSelector((state: StoreState) => state);
  const putCartHandler = async (id: number) => {
    const res = await putCart(id);

    if (res.code === 200) {
      console.log("here");
      dispatch(setCartLists(res.content));
    }
  };
  return (
    <BuyListButtonStyle onClick={() => putCartHandler(id)}>
      <Bag className="bag" />
    </BuyListButtonStyle>
  );
};

// 추후 api로 이동
export interface RegisterType {
  potSerial: string;
  plantNickname: string;
  waterSupply: string;
  plantSeq: string;
}

export const SubmitButton: React.FC<{
  children: string;
  onRegisterHandler: () => void;
}> = ({ children, onRegisterHandler }) => {
  const onSubmitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    onRegisterHandler();
  };

  return (
    <SubmitButtonStyle onClick={onSubmitHandler} type="submit">
      {children}
    </SubmitButtonStyle>
  );
};

export const CancelButton: React.FC<{
  children: string;
  onClick: () => void;
}> = ({ children, onClick }) => {
  const router = useRouter();
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    onClick();
  };

  return (
    <CancelButtonStyle type="button" onClick={onClickHandler}>
      {children}
    </CancelButtonStyle>
  );
};

export const LoginButton: React.FC<{
  path: string;
}> = ({ path }) => {
  return (
    <div>
      <Link href={path}>
        <LoginButtonStyle>로그인 없이 둘러보기</LoginButtonStyle>
      </Link>
    </div>
  );
};

export interface StatusProps {
  status: {
    statusCode: number;
    title: string;
    src: null | string;
  };
  activeIndex: number;
  onClick: (code: number) => void;
  backgroundColor: string;
  backgroundHover: string;
  textColor: string;
}

export const StatusButton: FC<StatusProps> = ({
  status,
  activeIndex,
  onClick,
  backgroundColor,
  backgroundHover,
  textColor,
}) => {
  const onChangeActiveHandler = () => {
    if (onClick !== null) {
      onClick(status.statusCode);
    }
  };

  return (
    <StatusButtonStyle
      onClick={onChangeActiveHandler}
      isActive={status.statusCode === activeIndex}
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
      textColor={textColor}
    >
      {status.src && (
        <Image
          src={status.src}
          // layout="fill"
          width={"40px"}
          height={"40px"}
          alt="상태 아이콘"
        />
      )}

      <span>{status.title}</span>
    </StatusButtonStyle>
  );
};
