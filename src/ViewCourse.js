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
        text : 'mining2',
      label: '/vedio2.mp4',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        id : 3,
        text : 'mining3',
      label: '/vedio1.mp4',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];
  

export default function HorizontalLinearStepper() {
     
  const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
    
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // const [skipped, setSkipped] = React.useState(new Set());

  
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

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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

  return (
    <Grid
    container
    spacing={0}
    direction="column"    
    align="center"
    alignItems="center"
    justifyContent="center"
    >
    <Card sx={{ minWidth: 500}}>
        
    
    <CardContent >

    <Grid style={{ margin: 20 }}>
        <Typography variant="h4">
          <strong>Awsome Card</strong>
        </Typography>
      </Grid>

      <Divider style={{ margin: 20 }} />

      { activeStep < maxSteps ?
      <CourseVedio key={steps[activeStep].id} video = {steps[activeStep].label}/> : <Certificate/>
      }
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
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

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
