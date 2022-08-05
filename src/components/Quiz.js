import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Quiz_Set = [
    {
        queno:"que_1",
        que : "1) How many sides are equal in a scalene triangle?",
        options : [{que_options1: "3" , selected: false},{que_options2:"2", selected: false},{que_options3:"0", selected: false},{que_options4:"24", selected: false}],
        ans : "0"
    },
    {
        queno:"que_2",
        que : "2) The angles of a triangle are 90°,35° and 55°.What type of triangle is this?",
        options : [{que_options1: "Right Angled" , selected: false},{que_options2:"Obtuse Angled", selected: false},{que_options3:"Acute Angled", selected: false,},{que_options4:"2321", selected: false}],
        ans : "Right Angled"
    },
    {
        queno:"que_3",
        que : "3) The perimeter of an equilateral triangle is 24cm.Length of each side(in cm) is?",
        options : [{que_options1: "9" , selected: false},{que_options2:"6", selected: false},{que_options3:"8", selected: false},{que_options4:"saddsa", selected: false}],
        ans : "8"
    },
    {
        queno:"que_4",
        que : "4) The sum of angles of a triangle is?",
        options : [{que_options1: "90" , selected: false},{que_options2:"150", selected: false},{que_options3:"180", selected: false},{que_options4:"3123122", selected: false}],
        ans : "180"
    },
    {
        queno:"que_5",
        que : "5) A triangle has angles 60°,60° and 60°.State the type of triangle?",
        options : [{que_options1: "Isosceles" , selected: false},{que_options2:"Equilateral", selected: false},{que_options3:"Scalene", selected: false},{que_options4:"3213122", selected: false}],
        ans : "Equilateral"
    },
]


const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  

export default function Quiz(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [checked1,setChecked1] = React.useState(false)
    const [checked2,setChecked2] = React.useState(false)
    const [checked3,setChecked3] = React.useState(false)
    const [checked4,setChecked4] = React.useState(false)
    const [ans,setAns] = React.useState("")
    const [count, setCount] = React.useState(0)
    const [open, setOpen] = React.useState(false);  

    const handleClose = () => {
    
      // setOpen(false);
      window.location.reload()

      
    };
    
    let total = props.questions.length
    const handleNext = () => {
      setChecked1(false)
      setChecked2(false)
      setChecked3(false)
      setChecked4(false)

      const inventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cherries', quantity: 5}
      ];
      // console.log(props.questions)

      props.questions.find(({ answer }) => {
        if(ans === answer){
          console.log("dsadsadsad",answer)
          setCount(count+1)
        }
        setAns("")
      });
    
      // console.log(result)
      // props.questions.map(item =>{ 
      //   if(ans === item.ans){
      //     console.log("dsad")
      //     setCount(count + 1)
          
      //   }
      // })

      console.log("clicked")

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
    };

    console.log("count ------ ",count)
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const selectOption = (e) =>{
      
    }

    const handleSubmit = () =>{
      console.log("count",count)
      if(count < props.questions.length-1){
        setOpen(true)
      }
      if(count <= props.questions.length){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
  
        props.getVerified(true)
      }
    }
    const option1 = (e) =>{
        setAns(e.target.value)
        setChecked1(true)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)


    }
    const option2 = (e) =>{
        setAns(e.target.value)
        setChecked2(true)
        setChecked1(false)
        setChecked3(false)
        setChecked4(false)
        

    }
    const option3 = (e) =>{
        setAns(e.target.value)
        setChecked3(true)
        setChecked1(false)
        setChecked2(false)
        setChecked4(false)

    }
    const option4 = (e) =>{
        setAns(e.target.value)
        setChecked4(true)
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
      

    }
  
    return (
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`You Scored ${count} out of ${total} `}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sorry, You failed this test , Please watch the course again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
  
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
         <Box sx={{ maxWidth: 400 }}>

        
        <Stepper activeStep={activeStep} orientation="vertical">
          {props.questions.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === props.questions.length-1 ? (
                    <Typography variant="caption" sx={{fontWeight:900,letterSpacing:2,color:"#FF38FF"}} >Last step</Typography>
                  ) : null
                }
                sx={{fontWeight:900,letterSpacing:2,color:"#FF38FF"}}
              >
                <Typography sx={{fontWeight:900,letterSpacing:2,color:"#fff"}}>
                {step.queno}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography sx={{fontWeight:900,letterSpacing:2,color:"#fff"}} >{step.que}</Typography>
             
                        <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button >
                        <Checkbox onChange={option1} value={step.options[0].que_options1} checked={checked1}></Checkbox>
                        <ListItemText onClick={selectOption} primary={step.options[0].que_options1}></ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                        <Checkbox onChange={option2} value={step.options[1].que_options2} checked={checked2} {...label} />
                        <ListItemText primary={step.options[1].que_options2} />
                        </ListItem>
                        <ListItem button>
                        <Checkbox onChange={option3}  value={step.options[2].que_options3} checked={checked3} {...label} />
                        <ListItemText primary={step.options[2].que_options3} />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                        <Checkbox onChange={option4} value={step.options[3].que_options4} checked={checked4} {...label} />
                        <ListItemText primary={step.options[3].que_options4} />
                        </ListItem>
                        </List>
                   
                <Box sx={{ mb: 2 }}>
                  <div>
                    {
                      index === props.questions.length - 1 ?  
                      <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 1, mr: 1,fontWeight:900,letterSpacing:2,color:"#fff",backgroundColor:"#FF38FF"}}
                    >
                      {'Submit'}
                    </Button> : 
                     <Button
                     variant="contained"
                     onClick={handleNext}
                     sx={{ mt: 1, mr: 1,fontWeight:900,letterSpacing:2,color:"#fff",backgroundColor:"#FF38FF" }}

                   >
                     {'Continue'}
                   </Button>
                    }

                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1,fontWeight:900,letterSpacing:2,color:"#fff",backgroundColor:"#FF38FF" }}
                   
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === props.questions.length && (
          <Paper square elevation={0} sx={{ p: 3 , backgroundColor:"transparent"}} >
            <Typography sx={{fontWeight:900,letterSpacing:2,color:"#fff"}} >You successfully completed the test,click finish,to recieve your certificate</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1,fontWeight:900,letterSpacing:2,color:"#fff",backgroundColor:"#FF38FF"}}>
              Try again
            </Button>
          </Paper>
        )}
      </Box>
          </div>
    );
  }