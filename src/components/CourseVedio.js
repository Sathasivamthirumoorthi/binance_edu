import { Opacity } from "@mui/icons-material";
import { CardMedia,Container } from "@mui/material";
import { height } from "@mui/system";

export default function CourseVedio(props){
    return(
        <Container maxWidth="lg">
            <CardMedia
            component="video"
            sx={{
                width:"100%",
                maxHeight:"600px",
                zIndex: 2
            }}
            image={props.video}
            controls
            />
        </Container>
    )
}