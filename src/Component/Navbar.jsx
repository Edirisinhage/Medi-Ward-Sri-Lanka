import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function Navbar() {
  return (
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
              Profile
            </Typography>
          </Grid>
        </Grid>
  )
}
