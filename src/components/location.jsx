import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  height: 350px;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
 
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />

<Map style={{ height: "350px" }}>
  <iframe
    title="위더스 안양 지도"
    src="https://map.naver.com/v5/search/위더스%20안양"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
  />
</Map>
        
      <Content>
        경기 안양시 만안구 안양로 104
        <br />
        위더스 안양 9층 메리홀
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        찾아가는길
        버스
       성결대학, 안양아트센터, 명학역 정류장 하차

        <br />
        간선버스(파랑) - 541번
        지선버스(초록) - 5530, 5531, 5623번
        직행좌석(빨강) - 333, 1303, 3330
        일반버스 - 1, 1-2, 5, 8-2, 11-2, 15, 15-2, 20, 31-7, 32, 64, 88, 350번
        마을버스 - 10-1, 10-2
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
       지하철 1호선 '명학역' 하차 1번 출구 (도보 2분 거리)
      </Content>
    </Wrapper>
  );
};

export default Location;
