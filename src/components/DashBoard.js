import * as React from 'react';
import {Box, Grid,CardHeader,Container,Typography,CardActionArea,CardContent} from '@mui/material';
import ReactPlayer from 'react-player';
import Course from './Course';
import { Link,useNavigate } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Games from "./games/Games"


export default function DashBoard() {
  const [spacing, setSpacing] = React.useState(2);

  const navigate = useNavigate();

  const games = [
    {
      id : 1,
      name : "SHA 256 GENERATOR",
      path :"sha256generator",
      label : "https://assets5.lottiefiles.com/packages/lf20_bmbkcawq.json",
      game : "https://ipfs.io/ipfs/QmdhFsMZCKYufzEqSARY5KPS5aJS3W9mVDXbf9jvAFNmPi",
      description : 'Learn the Mining Basics with Anime, Pass the Game, play the Quiz and collect your gifts ( Nft and Certificate) be proud to showcase it',
      
    },
    {
      id : 2,
      name : "BITCOIN SHOPING",
      path :"bitcoinshoping",
      label : "https://assets4.lottiefiles.com/private_files/lf30_vb7v5ca0.json",
      game : "https://ipfs.io/ipfs/QmTH9VDU3CbUUD2C5bnMePQEL3dotxWZQPw7g1fCgXg8TV",
      description : 'Learn the Mining Basics with Anime, Pass the Game, play the Quiz and collect your gifts ( Nft and Certificate) be proud to showcase it',

    }
  ]

  const states = [
    {
      id : 1,
      name: 'MINING',
      course: 'mining',
      description : 'Learn the Mining Basics with Anime, Pass the Game, play the Quiz and collect your gifts ( Nft and Certificate) be proud to showcase it',
      label: 'https://assets2.lottiefiles.com/packages/lf20_k3ooy40g.json',
      vedio : 'https://drive.google.com/file/d/1mo2uRIPMmMsMXcXiTKGHGBqUAgOEckyY/preview',
      questions :[
        {
            queno:"que_1",
            que : "1) Who receive transaction fees as rewards?",
            options : [{que_options1: "Dapps Developer" , selected: false},{que_options2:"Miners", selected: false},{que_options3:"Investers", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Miners"
        },
        {
            queno:"que_2",
            que : "2) A blockchain is",
            options : [{que_options1: "A chain of lego blocks" , selected: false},{que_options2:"A database with information on transactions", selected: false},{que_options3:"A National Bank Database", selected: false,},{que_options4:"None of the above", selected: false}],
            answer : "A database with information on transactions"
        },
        {
            queno:"que_3",
            que : "3) Where do bitcoin transaction fees go?",
            options : [{que_options1: "Satoshi Nakamoto" , selected: false},{que_options2:"Back into the blockchain", selected: false},{que_options3:"To the bitcoin miner", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "To the bitcoin miner"
        },
        {
            queno:"que_4",
            que : "4) Which of these most closely lines up with the meaning of mining Bitcoin?",
            options : [{que_options1: "Using your computer to verify legitimacy of bitcoin transactions" , selected: false},{que_options2:"Using your computer to discover hidden bitcoin in the blockchain", selected: false},{que_options3:"using your computer to digup blocks of blockchain", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Using your computer to verify legitimacy of bitcoin transactions"
        },
        {
            queno:"que_5",
            que : "5) What is a Miner? ",
            options : [{que_options1: "A type of blockchain" , selected: false},{que_options2:"Computer that validates and process blockchain transactions", selected: false},{que_options3:"An algorithm that predicts the next part of the chain", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Computer that validates and process blockchain transactions"
        },
    ]
      
    },
    {
      id : 2,
      name: 'HASHING',
      course: 'hashing',
      description : 'Learn the Hashing Basics with Anime, Pass the Game, play the Quiz and collect your gifts ( Nft and Certificate) be proud to showcase it',
      label: 'https://assets2.lottiefiles.com/packages/lf20_ndt8zfny.json',
      vedio : 'https://drive.google.com/file/d/1WI8WEwdxXXCLusJWBQ17nad9j1dyA-p3/preview',
      questions : [
        {
            queno:"que_1",
            que : "1) What is a hashing?",
            options : [{que_options1: "Gas" , selected: false},{que_options2:"Takes an input of any lenght returns a fixed lenght string of numbers and letters", selected: false},{que_options3:"UTXO", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Takes an input of any lenght returns a fixed lenght string of numbers and letters"
        },
        {
            queno:"que_2",
            que : "2) Which hashing algorithm is used by Bitcoin-Blockchain?",
            options : [{que_options1: "SHA-256" , selected: false},{que_options2:"SHA-224", selected: false},{que_options3:"SHA-384", selected: false,},{que_options4:"None of the above", selected: false}],
            answer : "SHA-256"
        },
        {
            queno:"que_3",
            que : "3) The fixed-length output is called a ?",
            options : [{que_options1: "bitcoin" , selected: false},{que_options2:"value", selected: false},{que_options3:"hash", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "hash"
        },
        {
            queno:"que_4",
            que : "4) A larger hash code cannot be decomposed into independent subcodes.",
            options : [{que_options1: "True" , selected: false},{que_options2:"False", selected: false},{que_options2:"", selected: false},{que_options2:"", selected: false}],
            answer : "False"
        },
        {
            queno:"que_5",
            que : "5) A hash function takes an input string with?",
            options : [{que_options1: "numbers" , selected: false},{que_options2:"alphabets", selected: false},{que_options3:"All the above", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "All the above"
        },
    ]

    },
    {
      id : 3,
      name: 'SOLIDITY',
      course: 'solidity',
      description : 'Learn the Solidity Basics with Anime, Pass the Game, play the Quiz and collect your gifts ( Nft and Certificate) be proud to showcase it',
      label: 'https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json',
      vedio : 'https://drive.google.com/file/d/1x-T4f0ybxXE1et6bFQ-nyPryCN7OcTYf/preview',
      questions : [
        {
            queno:"que_1",
            que : "1) In which programming language is Ethereum written?",
            options : [{que_options1: "Python" , selected: false},{que_options2:"solidity", selected: false},{que_options3:"Kotlin", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "solidity"
        },
        {
            queno:"que_2",
            que : "2) In which programming language is Smart Contracts written?",
            options : [{que_options1: "Solidity" , selected: false},{que_options2:"C#", selected: false},{que_options3:"Java", selected: false,},{que_options4:"None of the above", selected: false}],
            answer : "Solidity"
        },
        {
            queno:"que_3",
            que : "3) Which type of language is solidity?",
            options : [{que_options1: "Scripting language" , selected: false},{que_options2:"procedure oriented laungage", selected: false},{que_options3:"object oriented language", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "object oriented language"
        },
        {
            queno:"que_4",
            que : "4) Which among the following is true with respect to solidity programming language?",
            options : [{que_options1: "Solidity smart contracts can store more data" , selected: false},{que_options2:"Solidity is a statically typed language", selected: false},{que_options3:"the file extension of solidity files is .sl", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Solidity is a statically typed language"
        },
        {
            queno:"que_5",
            que : "5) who invented Solidity? ",
            options : [{que_options1: "Gavin Wood" , selected: false},{que_options2:"Dennis M. Ritchie", selected: false},{que_options3:"Guido van Rossum", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Gavin Wood"
        },
    ]
    },
    {
      id : 4,
      name: 'ETHEREUM',
      course: 'ethereum',
      description : 'Learn the Ethereum Basics with Anime, Pass the Game, play the Quiz and collect your gifts ( Nft and Certificate) be proud to showcase it',
     
      label: 'https://assets1.lottiefiles.com/private_files/lf30_io4tfdmg.json',
      vedio : 'https://drive.google.com/file/d/1zmHFGYbY74T3M6FN0k6MKVNvL0m8SRIz/preview',
      questions : [
        {
            queno:"que_1",
            que : "1) What is an Ethereum?",
            options : [{que_options1: "Open software platform based upon Blockchain technology" , selected: false},{que_options2:"Private software platform based upon Blockchain technology", selected: false},{que_options3:"Centralized platform", selected: false},{que_options4:"None of the above", selected: false},],
            answer : "Open software platform based upon Blockchain technology"
        },
        {
            queno:"que_2",
            que : "2) Once a smart contract on the Ethereum blockchain is deployed, it can never be changed again.",
            options : [{que_options1: "True" , selected: false},{que_options2:"False", selected: false},{que_options2:"", selected: false},{que_options2:"", selected: false}],
            answer : "True"
        },
        {
            queno:"que_3",
            que : "3) Ethereum was developed by",
            options : [{que_options1: "Satoshi Nakamoto" , selected: false},{que_options2:"Vitalik Buterin", selected: false},{que_options3:"Galvin Woods", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Vitalik Buterin"
        },
        {
            queno:"que_4",
            que : "4) Ethereum is in the process of moving to which consensus algorithm?",
            options : [{que_options1: "Proof of timestamps" , selected: false},{que_options2:"Proof of Stake", selected: false},{que_options3:"Proof of Work", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Proof of Stake"
        },
        {
            queno:"que_5",
            que : "5) What Is EVM? ",
            options : [{que_options1: "Electronic voting machine" , selected: false},{que_options2:"Evidence-based veterinary medicine", selected: false},{que_options3:"Ethereum Virtual Machine", selected: false},{que_options4:"None of the above", selected: false}],
            answer : "Ethereum Virtual Machine"
        },
    ]

    },
    
  ];

  

  return (
    <>
    <Box sx={{ width: '100%' , textAlign:"center",marginTop:"50px"}}>
    <Grid container
     spacing={5}
     direction="row"
     alignItems="center"
     justifyContent="center"
     
     item xs={12} sm={12} md={12}

    >

    <Typography variant="h3" gutterBottom component="div" color="#fff" sx={{fontWeight:900,marginTop:"20px",letterSpacing:2}}>
        COURSES
    </Typography>
    <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_bqmgf5tx.json"
          style={{ height: '150px', width: '200px'}}
          >
    </Player>

    </Grid>
      <Grid container
     spacing={5}
     direction="row"
     alignItems="center"
     justifyContent="center"
     style={{ minHeight: '80vh' }}
     item xs={12} sm={12} md={12}

    >
          
      {
        states.map((item)=>( 
        <Grid item xs='auto' marginTop={2} > 
        <Link to={`/dashboard/courses/` + item.course} state={{course : item}} style={{textDecoration:"none"}}>
        <Course course={item} key = {item.id} />
        </Link>        
        </Grid>
          ))
      }
      </Grid>
      <Grid container
     spacing={5}
     direction="row"
     alignItems="center"
     justifyContent="center"
     
     item xs={12} sm={12} md={12}

    >


      <Typography variant="h3" gutterBottom component="div" color="#fff" sx={{fontWeight:900,marginTop:"20px",letterSpacing:2}}>
        GAMES
      </Typography>
      <Player
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/private_files/lf30_vfygy1gs.json"
                    style={{ height: '150px', width: '200px'}}
                    >
    </Player>


      </Grid>

      <Grid container
     spacing={5}
     direction="row"
     alignItems="center"
     justifyContent="center"
     style={{ minHeight: '80vh' }}
     item xs={12} sm={12} md={12}

    >


          
      {
        games.map((item)=>( 
        <Grid item xs='auto' marginTop={2} > 
        <Link to={`/dashboard/games/` + item.path} state={{game : item}} style={{textDecoration:"none"}}>
        <div className='course'>
                <CardActionArea >
                    <CardContent sx={{ width: "300px"}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:900,letterSpacing:2,color:"#FF38FF"}}>
                        {item.name}
                    </Typography>
                    <Typography  variant="h6" sx={{letterSpacing:2}} color="#fff">
                       {item.description}
                    </Typography>
                    </CardContent>
                    <Player
                    autoplay
                    loop
                    src={item.label}
                    style={{ height: '300px', width: '300px'}}
                    >
                    </Player>
                </CardActionArea>
          </div>
        </Link>        
        </Grid>
          ))
      }
      </Grid>
      
      </Box>
      </>
    
  );
}
