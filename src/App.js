import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Center } from '@mantine/core';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Clouds from './backgroundWrap'
import LOGO from './images/donkey.png'
import THEME from './images/donkeyAndFriends.png'
import HomeCarousel from './components/HomeCarousel.js'



const App = () => {
  return (
    <Router>
      <header>
        <Link to='/'><img src={LOGO} alt='logo' className='nav-logo' /></Link>
        <Navbar />
      </header>

      {/* <div className="wrapper"> */}
      
      <Center h={100} mx="auto" className='headline'>
        <h1 className='headline'>  דפי צביעה של דונקי וחברים </h1>
      </Center>
        <div className="carousel-section">
          <HomeCarousel />
        </div>
        <Clouds />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      {/* </div> */}
    </Router>
  )
}

export default App