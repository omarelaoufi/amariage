import styled from "styled-components";

import HomeNavBar from "./HomeNavBar";
import HomeOffersSlider from "./HomeOffersSlider";
import HomeSlider from "./HomeSlider";

export default function Home() {
  return (
    <div className="home">
      <HomeHeaderWrapper>
        <HomeNavBar />
        <HomeSlider />
      </HomeHeaderWrapper>
      <HomeOffersSlider />
      {/* <HomeOffersSlider /> */}
    </div>
  );
}

const HomeHeaderWrapper = styled.div`
  height: 80vh;
  background-image: url("homeSlider.jpg");
  background-size: cover;
`;
