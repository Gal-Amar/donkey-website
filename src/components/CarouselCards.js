import {
  Card,
  Image,
  createStyles,
} from '@mantine/core';
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    height:'160px',
    overflow:'display',
  },

  item: {
    '&:hover': {
      transform: 'scale(1.10)',
    },
  }
  }));

export function CarouselCard(props) {
  const { classes, theme } = useStyles();
  
  return (
    <Card  radius="md" p="md"  className={classes.card} >
      <Card.Section  >
        <Link>
          <Image src={require(`./../images/${props.name}`)} fit= {'cover'} className={classes.item} style={{width : `${props.width}` , height : `${props.height}`}}/>
        </Link>
       </Card.Section>
    </Card>
  );
}


