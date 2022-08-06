import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/styles';


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
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  root: {
    boxShadow: '1 4px 4px 4px rgba(255, 105, 135, .3)',
    color: '#000',
    backgroundColor:"transparent"
  },
});


export default function Register(props){

  const classes = useStyles();

  const [count,setCount] = useState(0) 

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
          'Email is required')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Must be a valid email"
          ),

        education: Yup
          .string()
          .max(255)
          .required(
            'Education is required'),
        instution: Yup
            .string()
            .max(255)
            .required(
              'Instution is required'),
          
        password: Yup
          .string()
          .max(255)
          .required(
            'Password is required').matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        }),  
      onSubmit: values => {
        console.log(values)

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
         <Card className="login">
         <CardContent>
         <form onSubmit={formik.handleSubmit}>

               
         
            <Box sx={{ my: 5 }}>
              <Typography
                color="#0000FF"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="#FF38FF"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <Divider sx={{backgroundColor:"#FF38FF"}} />
       
              
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
              InputLabelProps={{style : {color : '#000'} }}
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
              InputLabelProps={{style : {color : '#000'} }}

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
                InputLabelProps={{style : {color : '#000'} }}
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
              InputLabelProps={{style : {color : '#000'} }}
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
              InputLabelProps={{style : {color : '#000'} }}
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
              
                Sign Up Now
              </Button>
            </Box>

       
            <Typography
              color="#000"
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