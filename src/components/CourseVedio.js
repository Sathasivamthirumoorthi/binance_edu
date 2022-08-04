import { Opacity } from "@mui/icons-material";
import { CardMedia,Container } from "@mui/material";
import { height } from "@mui/system";

export default function CourseVedio(props){
    return(
        <Container maxWidth="lg"   sx={{
            width:"100vh",
            zIndex: 2
        }}>

        <iframe  src={props.vedio} width="100%" height="600" allow="autoplay"></iframe>

        </Container>
    )
}