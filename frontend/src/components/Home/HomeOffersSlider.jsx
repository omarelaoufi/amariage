import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function HomeOffersSlider() {
  return (
    <HomeOffersSliderWrapper className="homeOffersSlider">
      {/* <Carousel
        plugins={[
          //   "infinite",
          "arrows",
          //   {
          //     resolve: slidesToShowPlugin,
          //     options: {
          //       numberOfSlides: 3,
          //     },
          //   },
        ]}
      >
        <img alt="Photos" src="homeSlider.jpg" style={{ width: "20vw" }} />
        <img alt="Photos" src="homeSlider.jpg" style={{ width: "20vw" }} />
        <img alt="Photos" src="homeSlider.jpg" style={{ width: "20vw" }} />
        <img alt="Photos" src="homeSlider.jpg" style={{ width: "20vw" }} />
        <img alt="Photos" src="homeSlider.jpg" style={{ width: "20vw" }} />
        <img alt="Photos" src="homeSlider.jpg" style={{ width: "20vw" }} />
      </Carousel> */}
    </HomeOffersSliderWrapper>
  );
}

const HomeOffersSliderWrapper = styled.div`
  height: 40vh;
`;
