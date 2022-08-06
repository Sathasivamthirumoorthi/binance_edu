import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    InputLabel,
    Card,
    CardHeader,
    MenuItem,
    Divider,
    CardContent,
    Stack
  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Login(props){
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup
          .string()
          .email(
            'Must be a valid email')
          .max(255)
          .required(
            'Email is required'),
        password: Yup
          .string()
          .max(255)
          .required(
            'Password is required'),
        }),  
      onSubmit: values => {
        // console.log(JSON.stringify({...values, role : "student"}))
        props.getloginData(values)
      }
    });
    
    
    return(
      // <Container maxWidth="lg">
      

      <Grid 
      container
      spacing={8}
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ minHeight: '100vh', }}
     
      >
      <Grid item xs={12} sm={8} md={4} justifyContent="center">
        
        
        <Player autoplay loop src={"https://assets5.lottiefiles.com/packages/lf20_2omr5gpu.json"}></Player>



      </Grid>

      <Grid item xs={12} sm={8} md={4} justifyContent="center"  >
         <Container >
         <Card>
         <CardContent style={{color: 'white'}} >
         <form onSubmit={formik.handleSubmit}>

               
         
            <Box sx={{ my: 5 }} >
              <Typography
                color="#0000FF"
                variant="h4"
              >
                Login 
              </Typography>
              <Typography
               color="#FF38FF"
                gutterBottom
                variant="body2"
              >
                Use your email to login
              </Typography>
            </Box>
            <Divider sx={{backgroundColor:"#fff"}} />
            <Grid
              spacing={12}
            >
           

            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
       
            />

            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
   
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
            </Box>
     
          
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>

            </Grid>
            <Typography
              color="#000"
              variant="body2"
            >
              Don't Have an account?
              {' '}
              
              <Link
                  variant="subtitle2"
                  underline="hover"
                  href='/register'
                >
                  Sign Up 
                </Link>
            </Typography>
            
          </form>
          </CardContent>
          </Card>
         </Container>  
  



      </Grid>

      </Grid>

      // </Container>



















    //   <Player autoplay loop src={"https://assets1.lottiefiles.com/packages/lf20_lzwjunns.json"} style={{ height: '50%', width: '50%' }}></Player>


        
    //   </Grid>
    //   <Grid item xs={8}>


        
    //   </Grid>
    //   <Box
    //     component="main"
    //     sx={{
    //       alignItems: 'center',
    //       display: 'flex',
    //       flexGrow: 1,
    //       minHeight: '100%'
    //     }}
    // >
    //      <Container maxWidth="sm">
    //      <Card>
    //      <CardContent>
    //      <form onSubmit={formik.handleSubmit}>

               
         
    //         <Box sx={{ my: 5 }}>
    //           <Typography
    //             color="textPrimary"
    //             variant="h4"
    //           >
    //             Login 
    //           </Typography>
    //           <Typography
    //             color="textSecondary"
    //             gutterBottom
    //             variant="body2"
    //           >
    //             Use your email to login
    //           </Typography>
    //         </Box>
    //         <Divider />
    //         <Grid
    //           spacing={12}
    //         >
           

    //         <TextField
    //           error={Boolean(formik.touched.email && formik.errors.email)}
    //           fullWidth
    //           helperText={formik.touched.email && formik.errors.email}
    //           label="Email Address"
    //           margin="normal"
    //           name="email"
    //           onBlur={formik.handleBlur}
    //           onChange={formik.handleChange}
    //           type="email"
    //           value={formik.values.email}
    //           variant="outlined"
    //         />

    //         <TextField
    //           error={Boolean(formik.touched.password && formik.errors.password)}
    //           fullWidth
    //           helperText={formik.touched.password && formik.errors.password}
    //           label="Password"
    //           margin="normal"
    //           name="password"
    //           onBlur={formik.handleBlur}
    //           onChange={formik.handleChange}
    //           type="password"
    //           value={formik.values.password}
    //           variant="outlined"
    //         />
    //         <Box
    //           sx={{
    //             alignItems: 'center',
    //             display: 'flex',
    //             ml: -1
    //           }}
    //         >
    //         </Box>
     
          
    //         <Box sx={{ py: 2 }}>
    //           <Button
    //             color="primary"
    //             disabled={formik.isSubmitting}
    //             fullWidth
    //             size="large"
    //             type="submit"
    //             variant="contained"
    //           >
    //             Sign In Now
    //           </Button>
    //         </Box>

    //         </Grid>
    //         <Typography
    //           color="textSecondary"
    //           variant="body2"
    //         >
    //           Don't Have an account?
    //           {' '}
              
    //           <Link
    //               variant="subtitle2"
    //               underline="hover"
    //               href='/register'
    //             >
    //               Sign Up 
    //             </Link>
    //         </Typography>
            
    //       </form>
    //       </CardContent>
    //       </Card>
    //      </Container>  
    // </Box>

    //   </Grid>
       
    )
}