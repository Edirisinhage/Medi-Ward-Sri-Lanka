import { Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../../Component/Sidebar'
import Theme from '../../Component/Theme';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const theme=Theme();


export default function News() {
    const  [sidebar,setSideBar]=useState(false);

    const sideBarHandle=()=>{
      setSideBar(true);
    }
  return (
    <Stack  display="flex" direction="row">
    <Stack display="flex" flex={2} position="static"
      sx={{backgroundColor:theme.palette.primary.main,height:"100vh",
        [theme.breakpoints.down("sm")]:{
          display:sidebar?"flex":"none",
        }
        
      }}>
        <Sidebar/>
    
    </Stack>
   
    <Stack flex={10} margin={0}
      sx={{backgroundColor:theme.palette.background.normal,height:"100vh"
      
      }}>
        <Grid container bgcolor={theme.palette.primary.main} sx={{height:80}} position="static">
          <Grid item xs={6}
            sx={{
              paddingTop:2,
              paddingBottom:2,
              paddingRight:10
            }}
          >
            <IconButton aria-label="delete" onClick={sideBarHandle} onBlur={()=>setSideBar(false)}>
              <DensityMediumIcon fontSize="large" sx={{color:theme.palette.background.normal}}></DensityMediumIcon>
            </IconButton>
          </Grid>
          <Grid item xs={6} 
            sx={{
              paddingTop:2,
              paddingBottom:2,
              paddingRight:10,
              color:theme.palette.background.normal,
            }}
            textAlign="right">
            <Typography variant="h4"
            sx={{
              [theme.breakpoints.down("sm")]:{
                fontSize:"20px",
                marginTop:2,
                paddingBottom:2,
            }
            }}>
              News
            </Typography>
          </Grid>
        </Grid>

    </Stack>
    
  </Stack>
  )
}
