import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader,NoSsr } from '@mui/material';
import { Box } from "@mui/material";
import mining from "../images/70067-bitcoin-mining-work.json"
import Lottie from 'lottie-react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
  } from '@mui/material/styles';
import "./Course.css"


export default function Course(props){


    return(
       
        <Box sx={{maxWidth:500}} >
          
            <div className='course'>
                <CardActionArea >
                    <CardContent sx={{ width: "300px"}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:900,letterSpacing:2,color:"#FF38FF"}}>
                        {props.course.name}
                    </Typography>
                    <Typography  variant="h6" sx={{letterSpacing:2}} color="#fff">
                       {props.course.description}
                    </Typography>
                    </CardContent>
                    <Player
                    autoplay
                    loop
                    src={props.course.label}
                    style={{ height: '300px', width: '300px'}}
                    >
                    </Player>
                </CardActionArea>
                </div>
    
        </Box>
       
    )
}