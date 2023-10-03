import { Carousel } from '@mantine/carousel';
import { CarouselCard } from './CarouselCards';
import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from 'react-icons/tb'
import { Center } from '@mantine/core';



const data = [
  {
    src: 'hipoPoster.jpeg',
    friendName: 'סופר היפו',
    friendDescription:'זהו היפו האמיץ, אשר מציל את העולם ונהנה מהחיים',

   
  },
  {
    src: 'hipoPoster.jpeg',
    friendName: 'היפו האמיץ',
  },
  // {
  //   src: 'pach.png',
  //   width: "130px",
  //   height: "130px",
  // },
  // {
  //   src: 'pich.png',
  //   width: "137px",
  //   height: "137px",
  // },
  // {
  //   src: 'humb.png',
  //   width: "100px",
  //   height: "130px",
  // },
  // {
  //   src: 'mouseAndDragon.png',
  //   width: "160px",
  //   height: "130px",
  // },

]

const HomeCarousel = () => {

  return (
    <Center>
      <Carousel
        className="carousel"
        mx="sm"
        my='sm'
        withIndicators
        slideGap="md"
        draggable={false}
        previousControlIcon = { <TbArrowBigLeftFilled size={35} />}
        nextControlIcon = {<TbArrowBigRightFilled size={35} />}

      >
        {
          data.map(({ src, friendName,friendDescription }, index) => {
            return (
              <Carousel.Slide key={index} className='character'>
                <CarouselCard src={src} friendName={friendName} friendDescription={friendDescription} />
              </Carousel.Slide>
            )
          })
        }

      </Carousel>
    </Center>
  );
}

export default HomeCarousel;