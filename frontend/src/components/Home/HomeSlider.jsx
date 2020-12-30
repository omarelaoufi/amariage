import styled from "styled-components";
import HomeSearchBar from "./HomeSearchBar";

export default function HomeSlider() {
  return (
    <HomeSliderWrapper className="homeSliderWrapper">
      <HomeTitle>
        <HomeTitleText>Phrase d'accroche présentation</HomeTitleText>
      </HomeTitle>
      <div>
        <HomeSearchBar />
        <HomeSubtitle>
          Lieu, traiteur, photographe, musique, coiffeur, robe de mariée,
          gateau..
        </HomeSubtitle>
      </div>
    </HomeSliderWrapper>
  );
}

const HomeSliderWrapper = styled.div`
  height: 70vh;
`;

const HomeTitle = styled.div`
  text-align: center;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5vh;
`;

const HomeTitleText = styled.h1`
  color: white;
`;

const HomeSubtitle = styled.h3`
  margin: auto;
  text-align: center;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.5);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 1vh;
`;
