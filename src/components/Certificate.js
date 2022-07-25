import { CardMedia,Container } from "@mui/material";
import { height } from "@mui/system";

export default function CourseVedio(props){
    return(
        <Container maxWidth="lg">
             <CardMedia
                 sx={{
                    width:"100%",
                    maxHeight:"600px"
                }}
                component="img"
                image="/certificate.webp"
                alt="certificate"
            />
        </Container>
    )
}