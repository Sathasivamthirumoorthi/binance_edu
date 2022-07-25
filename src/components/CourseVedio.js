import { CardMedia,Container } from "@mui/material";
import { height } from "@mui/system";

export default function CourseVedio(props){
    return(
        <Container maxWidth="lg">
            <CardMedia
            component="video"
            sx={{
                width:"100%",
                maxHeight:"800px"
            }}
            image={props.video}
            controls
            />
        </Container>
    )
}