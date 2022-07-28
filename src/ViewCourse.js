import * as React from 'react';
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
    KeyboardArrowLeft

} from '@mui/material';
import CourseVedio from "./components/CourseVedio"
import { useTheme } from '@mui/material/styles';
import { InsertEmoticonSharp } from '@mui/icons-material';
import Certificate from "./components/Certificate"
import Quiz from "./components/Quiz"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','hello'];

const steps = [
    {
        id : 1,
      text : 'mining1',
      label: '/vedio1.mp4',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      id : 2,
    }
  ];
  

export default function ViewCourse() {
     
  const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
    
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [verifed,setVerified] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  // const [skipped, setSkipped] = React.useState(new Set());

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

  const handleReset = () => {
    setActiveStep(0);
  };

  const getVerified = (values) =>{
    console.log(values)
    setVerified(true)
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
    >
    <Card sx={{ minWidth: 500}}>
        
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
        <Typography variant="h4">
          <strong>Awsome Card</strong>
        </Typography>
      </Grid>

      <Divider style={{ margin: 20 }} />
      <div style={{zIndex:2}}>
        {
          activeStep < maxSteps-1 ?
            <CourseVedio key={steps[activeStep].id} video = {steps[activeStep].label}/>  :  (<Quiz getVerified = {getVerified}/>)
        }
     
      </div>
    <Box sx={{ width: '100%' ,marginTop:'20px'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((item, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography  variant="caption">Optional</Typography>
          //   );
          // }
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
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>LEARN AGAIN</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </CardContent>
    </Card>

    </Grid>
  );
}
