import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/component1.png';
import Img2 from '../../assets/component2.png';
import './CarouselFade.css';

function CarouselFade() {
    return (
        <Carousel className='carousel' fade interval={3000} controls={false} indicators={false}>
            <Carousel.Item>
                <img className='img-style' src={Img1} alt='slide1' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-style' src={Img2} alt='slide2' />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;