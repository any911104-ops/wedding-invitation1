import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.div`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
`;

const Map = styled.div`
  width: 100%;
  height: 350px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const MapButton = styled.a`
  padding: 8px 16px;
  font-size: 0.8rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  text-decoration: none;
  color: #333;
  transition: 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Location = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new window.kakao.maps.LatLng(37.3943, 126.9568), 
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    new window.kakao.maps.Marker({
      position: options.center,
      map: map,
    });
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>

      <Image src={Flower} alt="flower decoration" />

      <Map id="map" />

      <ButtonGroup>
        <MapButton
          href="https://map.kakao.com/link/to/위더스안양,37.3943,126.9568"
          target="_blank"
          rel="noopener noreferrer"
        >
          카카오맵 길찾기
        </MapButton>

        <MapButton
          href="https://naver.me/xX75rN8t"
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버지도 보기
        </MapButton>
      </ButtonGroup>

      <Content>
        경기 안양시 만안구 안양로 104
        <br />
        위더스 안양 9층 메리홀
        <br /><br />

        <Title>버스 이용시</Title>
        <br /><br />
        성결대학, 안양아트센터, 명학역 정류장 하차
        <br />
        간선버스(파랑) - 541번
        <br />
        지선버스(초록) - 5530, 5531, 5623번
        <br />
        직행좌석(빨강) - 333, 1303, 3330
        <br />
        일반버스 - 1, 1-2, 5, 8-2, 11-2, 15, 15-2, 20, 31-7, 32, 64, 88, 350번
        <br />
        마을버스 - 10-1, 10-2
        <br /><br />

        <Title>지하철 이용시</Title>
        <br /><br />
        지하철 1호선 '명학역' 하차 1번 출구 (도보 2분)
      </Content>
    </Wrapper>
  );
};

export default Location;
