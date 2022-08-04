import { Opacity } from "@mui/icons-material";
import { CardMedia,Container,Grid,Button } from "@mui/material";
import { height } from "@mui/system";
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Games(props){
    const [wait,setWait] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setWait(true);
        }, 12000);
        return () => clearTimeout(timer);
      }, []);

    const location = useLocation(); 
    console.log(location.state)
    return(
        <Container maxWidth={false} className="game"  sx={{
       
             marginTop : "40px",
            zIndex: 2
        }}>

        {
            wait ?  
        <iframe  className="game"  src={location.state.game.game} allow="autoplay"></iframe>
            :
            <Grid container
            spacing={5}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            item xs={12} sm={12} md={12}
       
           >
                 
               <Grid item xs='auto' marginTop={2} > 
               <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/private_files/lf30_atq8bxjz.json"
                    style={{ height: '300px', width: '300px'}}
                    >
                    </Player>
               </Grid>
             </Grid>

        }
        

        </Container>
    )
}