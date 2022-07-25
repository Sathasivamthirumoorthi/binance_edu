import { ethers } from 'ethers';
import React from 'react'
import Grid from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"
import {auth} from "./firebase/firebase"
import web3 from "../images/92445-crypto-bitcoin.json"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { CardMedia, Container, Stack, Typography } from '@mui/material';
import "./Metamask.css"


export default function Metamask(props) {

  let navigate = useNavigate();
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance,setAccountBalance] = useState(0)

  const { ethereum } = window;

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;  
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);

      if (ethereum) {
        var provider = new ethers.providers.Web3Provider(ethereum);
      }
      const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();
        return accounts.length > 0;
      }
      await isMetaMaskConnected().then((connected) => {
        if (connected) {
            console.log("connected")
            setIsConnected(true)
            // metamask is connected
            props.getConnectedStatus(isConnected);
           
            if (props.currentUser) {
              signOut(auth);
              console.log(props.currentUser)
            } else {
              navigate("/login");
              
            }
      
        }else{
          console.log("disconnected")
          setIsConnected(false)
          props.getConnectedStatus(false);
          navigate("/");
        }
      });
    
    };
    checkMetamaskAvailability();

  },[]);

  

  
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
        console.log('please install metamask')
        alert("Please install metamask")
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
  
      setAccountBalance(bal);
      setAccountAddress(accounts[0]);
      setIsConnected(true);

      // if(isConnected){
      //   console.log("sdfafsa")
      //   props.getConnectedStatus(isConnected);
      // }else{
      //   props.getConnectedStatus(false)
      //   navigate("/");

      // }
      window.location.reload()
    } catch (error) {
      setIsConnected(false);
    }
  };

  
  



  return (

       <Grid 
      container
      spacing={8}
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ minHeight: '80vh' }}
      
      >
     <Grid item xs={12} sm={12} md={12} justifyContent="center">

     <Player autoplay loop src={"https://assets1.lottiefiles.com/packages/lf20_lzwjunns.json"} style={{ height: '100%', width: '100%' }}></Player>


      </Grid>

      <Grid item xs={12} sm={12} md={12} justifyContent="center">
         {
        isConnected ? <h1>Your now connected to metamask</h1> : <Button variant="contained" className='card' onClick={connectWallet} sx={{width:"200px",height:"200px",fontSize:"20px",backgroundColor:"#191c29",fontWeight:"700"}}>Connect</Button>
        }
      </Grid>

      </Grid>


  );
}
