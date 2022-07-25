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
import ViewCourse from './ViewCourse';
import Error from './components/Error';
import "./App.css"
import { Container } from '@mui/material';


function App() {

  const navigate = useNavigate();

  const db = getDatabase();
  
  const { currentUser } = useContext(AuthContext);
 
  const [metamaskConnectionStatus,setMetamaskConnectionStatus] = useState(false)

  const [id,setId] = useState(1)

  const [user, loading, error] = useAuthState(auth);
  
  const [open, setOpen] = useState(false);

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
        console.log("dsadsadasdsadsadsadasdsa")
        navigate("/dashboard")
      }).catch((error) =>{
        setOpen(true);
        console.log(error)
      }
        
      );
     
    }
    onRegister();
  }



  return (
    
      <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{height:"50%",width:"100%"}}>
          <Container > 
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Crypto.com
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
      </Box>
        {/* {
          metamaskConnectionStatus ? <Register/> : <Metamask getConnectedStatus = {getConnectedStatus}/>
        } */}
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
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
                  
                  </> : 
                <Route exact path='/login' element={<Login getloginData={getloginData} />}></Route>   

                }             

              <Route path="/will-match" element={<Error/>}>
            
              </Route>
              <Route path="*" element={<Error/>}>
                 
              </Route>
                                   
          </Routes>

      </div>

  );
}

export default App;
