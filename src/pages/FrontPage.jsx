import Main from "../components/elements/Main/Main";
import MainInfoBlock from "../components/elements/MainInfoBlock/MainInfoBlock";
import Footer from "../components/elements/Footer/Footer.jsx";
import About from "../components/elements/About/About";
import Slider from "../components/elements/Slider/Slider.jsx";

const FrontPage = () => {
  return (
    <div>
      <Main></Main>
      <About></About>
      <Slider></Slider>
      <MainInfoBlock></MainInfoBlock>
      <Footer></Footer>
    </div>
  );
};

export { FrontPage };
