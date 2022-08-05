import * as React from 'react'; 
import { ethers } from 'ethers';
import {Card,
    CardContent,
    Typography,
    Button,
    StepLabel,
    Step,
    Stepper,
    Box,
    Grid,
    Divider,
    MobileStepper,
    Paper,
    KeyboardArrowRight,
    KeyboardArrowLeft,
    Stack

} from '@mui/material';
import CourseVedio from "./CourseVedio"
import { useTheme } from '@mui/material/styles';
import { InsertEmoticonSharp } from '@mui/icons-material';
import Quiz from "./Quiz"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useLocation} from 'react-router-dom';
import "./Course.css"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {useNavigate} from "react-router-dom"
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Certificate from "./Certificate"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Nft from './Nft';
// import { useAddress, useMetamask } from "@thirdweb-dev/react";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','hello'];

const steps = [
    {
        id : 1,
    },
    {
      id : 2,
    }
  ];  
  

 

export default function ViewCourse() {


  const { ethereum } = window;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  
  const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [verifed,setVerified] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [courseData,setCourseData] = React.useState({})
  const [haveMetamask, sethaveMetamask] = React.useState(true);
  const [isConnected, setIsConnected] = React.useState(false);
  const [accountAddress, setAccountAddress] = React.useState('');
  const [accountBalance,setAccountBalance] = React.useState(0)
  const [complete, setComplete] = React.useState(false);

  // const [skipped, setSkipped] = React.useState(new Set());

  const location = useLocation();  
  
  // const address = useAddress();

  // console.log(address)


  const handleCloseComplete = () => {
    setComplete(false);
  };

  
  console.log(location.state)

  React.useEffect(() => {
    const { ethereum } = window;  
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);

  
      
    function handleAccountsChanged(accounts) {
      console.log(accounts);

      // if (accounts.length === 0) {
      //   $('#connection-status').innerText = "You're not connected to MetaMask";
      //   $('#connect-btn').disabled = false;
      // } else if (accounts[0] !== currentAccount) {
      //   currentAccount = accounts[0];
      //   $('#connection-status').innerText = `Address: ${currentAccount}`;
      //   $('#connect-btn').disabled = true;
      // }
    }
    if (ethereum) {
      var provider = new ethers.providers.Web3Provider(ethereum);
      ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
    }

      const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();
        return accounts.length > 0;
      }
      await isMetaMaskConnected().then((connected) => {
        if (connected) {
            console.log("connected")
            setIsConnected(true)
      
        }else{
          console.log("disconnected")
          setIsConnected(false)
        }
      });
    
    };
    checkMetamaskAvailability();

  },[]);
 
 
  const handleClose = () => {
    
    setOpen(false);
    
  };
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if(activeStep <steps.length - 1 ){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }
    setSkipped(newSkipped);
    
    if(activeStep === steps.length - 1){
      if(verifed){
        setActiveStep((prevActiveStep) => prevActiveStep + 1); 
        console.log("dsadsadsadsa")
      }
      else{
        setOpen(true)
      }
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleComplete = () => {
    // navigate("/dashboard/certificate")
    setComplete(true);
  };

  const handleCompleteClose = () =>{
    setComplete(false);

  }

  const getVerified = (values) =>{
    console.log(values)
    setVerified(true)
  }

  const handleDashboard = () =>{
    navigate("/dashboard") 
  }

  return (
    
    <Grid
    container
    spacing={0}
    direction="column"    
    align="center"
    alignItems="center"
    justifyContent="center"
    zIndex={-2}
    marginTop={2}
    >
   
    
    <div className='course-vedio'>
        
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Please attend the test`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sorry, You should finish the test to earn certificate
          </DialogContentText>
        </DialogContent>
        <DialogActions>
  
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>


    <CardContent >

    <Grid style={{ margin: 20 }}>
        <Typography variant="h4" color="#fff" sx={{color:"#fff",fontWeight:900,letterSpacing:2}}>
          <strong >{location.state.course.name}</strong>
        </Typography>
    </Grid>
    <Divider style={{ margin: 20 }} />
    <Grid style={{ width:"100%" }}>

      <div >
        { //location.state.name
          activeStep < maxSteps-1 ? 
            <CourseVedio key={steps[activeStep].id} vedio = {location.state.course.vedio}/>  :  (<Quiz  questions = {location.state.course.questions} getVerified = {getVerified}/>)
        }
      </div>
    </Grid>
    <Box sx={{ width: '100%' ,marginTop:'20px'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((item, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
             
            <Step key={item.id} {...stepProps}>
              <StepLabel {...labelProps}>{item.text}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
        
          <Player
                        autoplay
                        loop
                        src="https://assets4.lottiefiles.com/packages/lf20_znxedwj6.json"
                        style={{ height: '150px', width: '200px'}}
                        >
        </Player>
          <Typography sx={{ mt: 2, mb: 1,color:"#fff" }}>
            All steps completed - Congratulation
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleComplete} sx={{color:"#fff",fontWeight:900,letterSpacing:2}}>Complete</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1,color:"#fff",fontWeight:900,letterSpacing:2}} > Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 ,color:"white",fontWeight:900,letterSpacing:2}}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto',color:"#fff" }} />
            <Button onClick={handleNext} sx={{color:"#fff",fontWeight:700,letterSpacing:2}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </CardContent>
    </div>

    <Dialog
        fullScreen
        open={complete}
        onClose={handleComplete}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCompleteClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Congratulation
            </Typography>
            <Button autoFocus color="inherit" onClick={handleDashboard}>
              Go To Dashboard
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: '100%' }}>
          <Grid
             spacing={5}
             direction="row"
             alignItems="center"
             justifyContent="center"
             style={{ minHeight: '100vh' }}
             item xs={12} sm={12} md={12}>
            <Grid   container justify="flex-end" xs={12}   alignItems="center"
             justifyContent="center">
              <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_gfp4ynnl.json"
                        style={{ height: '150px', width: '200px'}}>      
                  </Player>
              <Typography sx={{ mt: 2, mb: 1,color:"#8F00FF",fontSize:"40px",letterSpacing:2,fontWeight:700 }}>
                Hurray!,You Did It
              </Typography>
                 <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
                        style={{ height: '150px', width: '200px'}}>      
                  </Player>
            </Grid>
          
            <Grid   container justify="flex-end" xs={12} sx={{height:"70vh"}} >
               <Nft/>
            </Grid>
            <Grid   container justify="flex-end" xs={12}>
              <Certificate/>
            </Grid>
        </Grid>
      </Box>
      </Dialog>
    </Grid>
    
  );
}
