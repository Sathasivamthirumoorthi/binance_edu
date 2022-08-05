import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//firebase
import React, { useEffect, useState } from "react";
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
    CardContent
  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { ethers } from 'ethers';
import UserInfoArtifact from './abi/user.json'
import contractAddress from './instance';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {

    color: 'white',
  },
});



export default function Register(props){

  const classes = useStyles()

  const [count,setCount] = useState(0) 

  const contractInstance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress,UserInfoArtifact.abi,signer);

    contract.register(2,formik.values.full_name,formik.values.email,formik.values.education,formik.values.instution);
    console.log("Successfully done");
  }

  // contractInstance();



    const formik = useFormik({
      initialValues: {  
        full_name: '',
        email: '',
        education : '',
        instution : '',
        password: '',
      },
      validationSchema: Yup.object({
       
        full_name: Yup
          .string()
          .max(255)
          .required(
            'First name is required'),
        email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
          education: Yup
          .string()
          .max(255)
          .required(
            'education is required'),
        instution: Yup
            .string()
            .max(255)
            .required(
              'instution is required'),
          
        password: Yup
          .string()
          .max(255)
          .required(
            'Password is required'),
        }),  
      onSubmit: values => {
        console.log(values)
        
        // registerWithEmailAndPassword(values)
        // register({
        //   email:'sathasivam@gmail.com',
        //   password:'Siva@2001'});
        props.getRegistrationData(values)
      }
    });

    const education_type = [
      {
        value: '',
        label: ''
      },
      {
        value: 'school',
        label: 'School'
      },
      {
        value: 'college',
        label: 'College'
      }
    ];
    const styles = theme => ({
      multilineColor:{
          color:'red'
      }
  });

    
    
    
    return(

      <Grid 
      container
      spacing={8}
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ minHeight: '100vh' }}
      
      >
      <Grid item xs={12} sm={8} md={4} justifyContent="center">
        
        
        <Player autoplay loop src={"https://assets10.lottiefiles.com/packages/lf20_ikaawl5v.json"} ></Player>



      </Grid>


      <Grid item xs={12} sm={8} md={5} >
      <Container maxWidth="sm">
         <Card className="login" sx={{backgroundColor: "transparent"}}>
         <CardContent>
         <form onSubmit={formik.handleSubmit}>

               
         
            <Box sx={{ my: 5 }}>
              <Typography
                color="#fff"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="#fff"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <Divider sx={{backgroundColor:"#fff"}} />
       
              
            <TextField
              error={Boolean(formik.touched.full_name && formik.errors.full_name)}
              fullWidth   
              helperText={formik.touched.full_name && formik.errors.full_name}
              label="Full Name"
              margin="normal"
              name="full_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.full_name}
              variant="outlined"
              sx={{ input: { color: '#fff' },backgroundColor:"transparent" }}
              InputLabelProps={{style : {color : 'white'} }}
            className={classes.root}
              
            />
            <TextField
            className={classes.root}
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
              sx={{ input: { color: '#fff' },backgroundColor:"transparent" }}
              InputLabelProps={{style : {color : 'white'} }}
            />

            <TextField 
                error={Boolean(formik.touched.education && formik.errors.education)}
                fullWidth
                helperText={formik.touched.education && formik.errors.education}
                label="Education"
                name="education"
                margin='normal'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                select
                SelectProps={{ native: true }}
                value={formik.values.education}
                variant="outlined"
                sx={{ input: { color: '#fff',backgroundColor:"#fff" },backgroundColor:"transparent",color:"#fff" }}
                InputLabelProps={{style : {color : 'white'} }}
                className={classes.root}
                
              >
                {education_type.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>

              <TextField
              error={Boolean(formik.touched.instution && formik.errors.instution)}
              fullWidth   
              helperText={formik.touched.instution && formik.errors.instution}
              label="Instution Name"
              margin="normal"
              name="instution"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.instution}
              variant="outlined"
              sx={{ input: { color: '#fff' },backgroundColor:"transparent" }}
              InputLabelProps={{style : {color : 'white'} }}
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
              sx={{ input: { color: '#fff' },backgroundColor:"transparent" }}
              InputLabelProps={{style : {color : 'white'} }}
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
                onClick={async ()=>{await contractInstance()}}
              >
                Sign Up Now
              </Button>
            </Box>

       
            <Typography
              color="#fff"
              variant="body2"
          
          
            >
              Have an account?
              {' '}
              
              <Link
                  variant="subtitle2"
                  underline="hover"
                  href='/login'
                >
                  Sign In
                </Link>
            </Typography>
            
          </form>
          </CardContent>
          </Card>
         </Container>



      </Grid>

      </Grid>

    
    )
}