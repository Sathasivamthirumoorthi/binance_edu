import * as React from 'react';
import {Box, Grid,CardHeader,Container} from '@mui/material';
import ReactPlayer from 'react-player';
import Course from './Course';
import { Link } from 'react-router-dom';



export default function DashBoard() {
  const [spacing, setSpacing] = React.useState(2);

  const states = [
    {
      id : 1,
      name: 'MINING',
      description : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      label: 'https://assets2.lottiefiles.com/packages/lf20_k3ooy40g.json'
    },
    {
      id : 1,
      name: 'HASHING',
      description : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      label: 'https://assets7.lottiefiles.com/packages/lf20_knixvxzq.json'
    },
    {
      id : 1,
      name: 'SOLIDITY',
      description : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      label: 'https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json'
    },
    {
      id : 1,
      name: 'ETHEREUM',
      description : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      label: 'https://assets1.lottiefiles.com/private_files/lf30_io4tfdmg.json'
    },
  ];
  

  return (
    <>
      <Grid container
     spacing={5}
     direction="row"
     alignItems="center"
     justifyContent="center"
     style={{ minHeight: '100vh' }}
    >
      {
        states.map((item)=>( 
        <Grid item xs='auto'  > 
        <Link to={`/dashboard/courses/` + item.name } style={{textDecoration:"none"}}>
        <Course course={item} key = {item.id} />
        </Link>        
        </Grid>

          ))
      }
      </Grid>
    
      </>
  );
}
