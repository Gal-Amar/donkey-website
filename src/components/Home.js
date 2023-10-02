import MyGrid from './MyGrid';
import HomeCarousel from './HomeCarousel.js'
import GridSection from './GridSection';
import { Center } from '@mantine/core';

const Home = () => {
  document.title = 'Donkey Home page';
  return (
    <div className="home">
      
      <div className="carousel-section">
        <HomeCarousel />
      </div>
     
      <Center maw={500} h={100} mx="auto">
        <h1 id="home-header"> דפי צביעה </h1>
      </Center>
      <div className="grid-section">
       <GridSection />
      </div>
      {/* <PrintablePage name = 'pic' hebName='ענן' kind='jpeg' /> */}
      {/* <MyGrid /> */}
    </div >
   
  )
}

export default Home;