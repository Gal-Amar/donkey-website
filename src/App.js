import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Home from './components/Home';
import Navbar from './components/Navbar';
import Clouds from './backgroundWrap'
import LOGO from './images/donkey.png'
import THEME from './images/donkeyAndFriends.png'

const App = () => {
  return (
    <Router>
      <div className="logo">
        <Link to='/'><img src={THEME} alt='logo' className='nav-logo' /></Link>
      </div>
      <div className="wrapper">
        {/* <div className="header-wrapper"> */}
          <header>
              <div className='header-content'>
                <Navbar />
                {/* <h1>דונקי וחברים</h1> */}
              </div>
            
          </header>
        {/* </div> */}
        <Clouds />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App