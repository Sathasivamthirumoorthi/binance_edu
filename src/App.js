import { useEffect, useState,useContext } from 'react';
//react router
import { BrowserRouter as Router,Routes, Route, Link,useNavigate } from 'react-router-dom';
//components
import Metamask from './components/Metamask'
import DashBoard from './components/DashBoard'
//mui
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Container } from '@mui/material';
// auth components
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//firebase
import {database,auth} from "./components/firebase/firebase"
import { getDatabase, ref, set,onValue } from "firebase/database";
import { AuthContext } from "./AuthProvider";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css"
import ViewCourse from './components/ViewCourse';
import Error from './components/Error';
import Games from "./components/games/Games"
import "./App.css"
import Certificate from "./components/Certificate"


function App() {

  const navigate = useNavigate();

  const db = getDatabase();
  
  const { currentUser } = useContext(AuthContext);
 
  const [metamaskConnectionStatus,setMetamaskConnectionStatus] = useState(false)

  const [id,setId] = useState(1)

  const [user, loading, error] = useAuthState(auth);
  
  const [open, setOpen] = useState(false);

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };  

  const handleClose = () => {
  
    // setOpen(false);
    window.location.reload()

    
  };
  

  // useEffect(()=>{   get all user
  //   const starCountRef = ref(db, 'users/');
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data.length)
  //     setId(data.length)
  //   });
  // })

  // useEffect(() => {   auto sign in
  //   if (loading) return;
  //   if (user) navigate("/dashboard");
  // }, [user, loading]);

  const getConnectedStatus = (values) => {
    if(values){
      setMetamaskConnectionStatus(true)
    }else{
      setMetamaskConnectionStatus(false)
    }
  }

  const getRegistrationData = (values) =>{
    const auth = getAuth();

   const res =  createUserWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid)
    const data = () =>{ set(ref(db, `users/${user.uid}`),values,{})}
          data()
          navigate("/login")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
   
  }

  const getloginData = (values) =>{
    function onRegister() {
      signInWithEmailAndPassword(auth, values.email, values.password).then((res)=>{
        navigate("/dashboard")
      }).catch((error) =>{
        setOpen(true);
        console.log(error)
      }
        
      );
     
    }
    onRegister();
  

  
  }

  const goHome = () => {
    navigate('/dashboard')
  }



  return (
    
      <div className="App">
      <video className='videoTag' autoPlay loop muted>
        <source src="/background.mp4" type='video/mp4' />
      </video>
    
      <Box sx={{ flexGrow: 1}}>
    
        <AppBar  position="static" sx={{height:"50%",width:"100%",backgroundColor:"transparent"}}>
        <div className="header">
          <Container lg> 
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }} onClick={goHome}>
          <CurrencyBitcoinIcon sx={{ display: { xs: 'none', md: 'flex',fontSize:"30px" }, mr: 1 }} />
          </IconButton>
          <Typography variant="h6" color="inherit" sx={{fontWeight:700,letterSpacing:2}} component="div">
            CRYPTO CASTLE
          </Typography>
        </Toolbar>
        </Container>
        </div>
      </AppBar>
      
      </Box>
     

       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Incorrect Password"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Incorrect password , please call your content provider
          </DialogContentText>
        </DialogContent>
        <DialogActions>
  
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
          <Routes>
                <Route exact path='/' element={<Metamask getConnectedStatus = {getConnectedStatus} currentUser ={currentUser} />}></Route>
                <Route exact path='/register' element={<Register getRegistrationData={getRegistrationData} />}></Route>                
                <Route exact path='/login' element={<Login getloginData={getloginData} />}></Route>   
                {
                  user ? <>
                   <Route exact path='/dashboard' element={<DashBoard />}></Route>   
                  <Route exact path='/dashboard/courses/:name' element={<ViewCourse />}></Route>  
                  <Route exact path='/dashboard/games/:name' element={<Games />}></Route>  
                  <Route exact path='/dashboard/certificate' element={<Certificate />}></Route>  
                  </> : 
                <Route exact path='/login' element={<Login getloginData={getloginData} />}></Route>   

                }             
                                   
          </Routes>

      </div>

  );
}

export default App;
