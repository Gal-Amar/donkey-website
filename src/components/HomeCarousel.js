import { Carousel } from '@mantine/carousel';
import { CarouselCard } from './CarouselCards';
import {TbArrowBigRightFilled, TbArrowBigLeftFilled} from 'react-icons/tb'


const data = [
  {
    src: 'hipo.png',
    width: "210px",
    height: "130px",
  },
  {
    src: 'pach.png',
    width: "130px",
    height: "130px",
  },
  {
    src: 'pich.png',
    width: "137px",
    height: "137px",
  },
  {
    src: 'humb.png',
    width: "100px",
    height: "130px",
  },
  {
    src: 'mouseAndDragon.png',
    width: "160px",
    height: "130px",
  },
 
]

const HomeCarousel = () => {
  return ( 
    <Carousel
      id="home-carousel"
      slideSize='20%'
      align={window.innerWidth > '1024px' ? 'start' : 'center'}
      inViewThreshold={0.99}
      slidesToScroll={1}
      slideGap="sm"
      nextControlIcon = {<TbArrowBigRightFilled size = {35}  />}
      previousControlIcon = { <TbArrowBigLeftFilled size = {35} />}
      
      >
      {
        data.map(({src, width, height} , index) => {
          return (
            <Carousel.Slide key={index} className='character'>
              <CarouselCard name = {src} width = {width} height = {height}/>
            </Carousel.Slide>
          )
        })
      }

  </Carousel>
  );
}

export default HomeCarousel;