import {
  Card,
  Center,
  Image,
} from '@mantine/core';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

import { Link } from 'react-router-dom';

export function CarouselCard(props) {
  return (

    <Paper radius="md" p="xl" shadow='md' className="carousel-card" >
      <h1 className='card-headline'>הכירו את הדמויות שלנו!</h1>
      <div className='carousel-card-content'>
        <div className="carousel-card-text">
         
          <h1>{props.friendName} </h1>
          <p>{props.friendDescription}</p>
          <h3>
            דפי צביעה ומשחקים להורדה
          </h3>
          <div className="carousel-links">
            <Link to={"#"} className='btn card-button'>
            לצפייה בדפי הצביעה 
            </Link>
            <Link to={"#"} className='btn btn-primary card-button'>
              לצפייה במשחקים 
            </Link>
          </div>
          
        </div>
        <div className='carousel-image'>
          <Image src={require(`./../images/${props.src}`)} className='carousel-image' />
        </div>
      </div>


    </Paper>
  );
}


