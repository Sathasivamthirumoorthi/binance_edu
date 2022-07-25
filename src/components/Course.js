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
        <Box sx={{maxWidth:500}} className="card">
            <Card sx={{ width: "300px" }}>
                <CardActionArea>
        
                    <CardContent sx={{ width: "200px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {props.course.description}
                    </Typography>
                    </CardContent>
                    <Player
                    autoplay
                    loop
                    src={props.course.label}
                    style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </CardActionArea>
            </Card>
        </Box>
    )
}