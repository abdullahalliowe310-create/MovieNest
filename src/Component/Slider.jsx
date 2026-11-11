import Carousel from 'react-bootstrap/Carousel';
import superman from "../assets/Slider/superman.jpeg"
import Whalefall from "../assets/Slider/Whalefall.webp"
import Fighter from "../assets/Slider/Fighter.webp"
import spiderman from "../assets/Slider/spiderman.jpeg"
import Evil from "../assets/Slider/Evil.webp"
import Doomsday from "../assets/Slider/Doomsday.webp"
import lupin from "../assets/Slider/lupin.jpeg"
import dc from "../assets/Slider/dc.jpeg"




function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={superman} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Fighter} alt="" />
      </Carousel.Item>
      
      <Carousel.Item>
        <img src={Whalefall} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Evil} alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={spiderman} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={Doomsday} alt="" />
      </Carousel.Item>
        <Carousel.Item>
        <img src={lupin} alt="" />
      </Carousel.Item>
        <Carousel.Item>
        <img src={dc} alt="" />
      </Carousel.Item>


    </Carousel>
  );
}

export default Slider;