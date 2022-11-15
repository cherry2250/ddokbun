import router from "next/router";
import { setCookie } from "cookies-next";
import AXIOS from "./index";

export const Kakaologin = async (login_code?: string[] | string) => {
  const path = "user/login/oauth/kakao?code=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + login_code,
    });
    const { userSeq } = res.data.content;
    const accessToken = res.data.content.jwtToken;
    AXIOS.defaults.headers.common["Authorization"] = `${accessToken}`;
    console.log("성공진행", res, "액세스", accessToken);
    setCookie("token", accessToken);
    router.push(`/manage/${userSeq}`);
    return accessToken;
  } catch (error) {
    console.log(error);
  }
};

export const Googlelogin = async (login_code?: string[] | string) => {
  const path = "user/login/oauth/google?code=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + login_code,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
