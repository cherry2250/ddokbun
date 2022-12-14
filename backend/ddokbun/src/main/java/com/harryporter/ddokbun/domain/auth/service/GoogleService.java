package com.harryporter.ddokbun.domain.auth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.harryporter.ddokbun.domain.auth.dto.*;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
@Slf4j
public class GoogleService {
    private final UserService userService;

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;
    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;
    @Value("${spring.security.oauth2.client.registration.google.redirect-uri}")
    private String redirectUri;
    public OAuthRes googleLogin(String code){
        log.info("구글 로그인 파이프라인 진입 :: 인가 코드 : {}", code);
        String decodedCode="";
        try {
            decodedCode = java.net.URLDecoder.decode(code, StandardCharsets.UTF_8.name());
        } catch (UnsupportedEncodingException e) {

        }
        GoogleAccessToken accessToken = getGoogleAuthTokenByCode(decodedCode);
        if(accessToken==null)
            throw new GeneralException(ErrorCode.DATA_ACCESS_ERROR,"Access Token을 받아오지 못했습니다.");

        GoogleProfile googleProfile = getGoogleProfileByAccessToken(accessToken);
        if(googleProfile==null)
            throw new GeneralException(ErrorCode.DATA_ACCESS_ERROR,"구글 프로필을 받아오지 못했습니다.");

        UserDto userDto = userService.signup(new UserSocialDto(googleProfile));

        String jwtToken = JwtTokenUtils.generateJwtToken(userDto);
        OAuthRes res = new OAuthRes(jwtToken,userDto.getUserSeq());

        return res;
    }

    private GoogleAccessToken getGoogleAuthTokenByCode(String code){
        log.info("구글 Access Token 받아오기 :: 인가 코드 : {}", code);
        try{// HTTP Header 생성
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

            // HTTP Body 생성
            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("grant_type","authorization_code");
            body.add("client_id",clientId);
            body.add("redirect_uri",redirectUri);
            body.add("client_secret",clientSecret);
            body.add("code",code);

            // HTTP 요청 보내기 (POST 방식으로)
            HttpEntity<MultiValueMap<String,String>> googleTokenRequest = new HttpEntity<>(body, headers);
            RestTemplate rt1 = new RestTemplate();
            ResponseEntity<String> response;
            try{
                response = rt1.exchange(
                        "https://oauth2.googleapis.com/token",
                        HttpMethod.POST,
                        googleTokenRequest,
                        String.class
                );
            }catch (HttpClientErrorException e){
                throw new GeneralException(ErrorCode.VALIDATION_ERROR,"Authorization code를 확인하세요.");
            }
            // HTTP 응답 (JSON) -> 액세스 토큰 파싱
            String responseBody = response.getBody();
            ObjectMapper objectMapper = new ObjectMapper();
            GoogleAccessToken googleOAuthToken = objectMapper.readValue(responseBody, GoogleAccessToken.class);

            return googleOAuthToken;

        } catch (JsonMappingException e) {
            return null;
        } catch ( JsonProcessingException e){
            return null;
        }
    }

    private GoogleProfile getGoogleProfileByAccessToken(GoogleAccessToken oAuthToken){
        log.info("구글 프로필 받아오기 :: Access Token : {}", oAuthToken.getAccess_token());
        // HTTP Header 생성
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+oAuthToken.getAccess_token());
        headers2.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기 (POST 방식으로)
        HttpEntity<String> googleProfileRequest = new HttpEntity(headers2);
        RestTemplate rt2 = new RestTemplate();
        ResponseEntity<String> response2 = rt2.exchange(
                "https://oauth2.googleapis.com/tokeninfo",
                HttpMethod.POST,
                googleProfileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        GoogleProfile googleProfile = null;
        try {
            googleProfile = objectMapper.readValue(response2.getBody(),GoogleProfile.class);
        } catch (JsonProcessingException e) {
        }

        return googleProfile;
    }
}
