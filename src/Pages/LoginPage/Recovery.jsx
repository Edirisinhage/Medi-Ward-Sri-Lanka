import { Box, Button, ButtonGroup, Hidden, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../../Component/Theme';

const theme=Theme();

const UserTitleBox=styled(Stack)(({theme})=>({
    marginTop:"50px",
    marginBottom:"30px",
    width:500,
    [theme.breakpoints.down("md")]:{
        width:350,
    },
    textAlign:"center",

}))

const Styledstack=styled(Stack)(({theme})=>({
    width:500,
    [theme.breakpoints.down("md")]:{
        width:350,
    },
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center"

}))

export default function Recovery({setRecoveryModel}) {

    const [email,setEmail]=useState(true);

    const [mobile,setMobile]=useState(false);

    const emailHandle=()=>{
        setEmail(true);
        setMobile(false);
    }

    const mobileHandle=()=>{
        setEmail(false);
        setMobile(true);
    }

  return (
    <Stack sx={{
        backgroundColor:theme.palette.background.paper,
        width:600,
        height:725,
        borderRadius:theme.shape.borderRadius,
        overflow:"hidden"
        }}>
        <Stack display="flex" direction="row" justifyContent='end'>
            <Button
                variant="contained" 
                onClick={()=>setRecoveryModel(false)}
            ><Typography variant='h5'>X</Typography>
            </Button>
        </Stack>

        <Stack alignItems="center" spacing={3}>
            <UserTitleBox>
                <Typography variant="h3">Recovery Password</Typography>
            </UserTitleBox>
            <Styledstack>
                <Typography variant="h6">Select a recovery method to proceed</Typography>
            </Styledstack>
            <Styledstack  direction="row" >
                <ButtonGroup>
                    <Button variant={email?'contained':"outlined"} sx={{width:150}} onClick={emailHandle}
                    >
                        <Typography variant='h6'>Email</Typography>
                    </Button>

                    <Button variant={mobile?"contained":"outlined"} sx={{width:150}} onClick={mobileHandle}
                    >
                        <Typography variant='h6'>Mobile</Typography>
                    </Button>
                </ButtonGroup>
            </Styledstack>
            <Styledstack>
                {email&&<Typography variant='h6'>We will send a OTP code for given email address to recover account</Typography>}
                {mobile&&<Typography variant='h6'>We will send a OTP code for given mobile number to recover account</Typography>}
            </Styledstack>

            <Styledstack>
            {email&&<TextField id="email" name="email" variant="outlined" size='small' placeholder="Enter your email"
                                    type="text"
                                    sx={{
                                        size:'small',
                                        width:"100%",
                                        borderRadius:theme.shape.borderRadius,
                                        "&:hover":{
                                            borderBlockColor:theme.palette.success.main
                                        }
                                        }}
                                    />}
            
            {mobile&&<TextField id="mobile-no" name="mobile-no" variant="outlined" size='small' placeholder="Enter your mobile number"
                                    type="text"
                                    sx={{
                                        size:'small',
                                        width:"100%",
                                        borderRadius:theme.shape.borderRadius,
                                        "&:hover":{
                                            borderBlockColor:theme.palette.success.main
                                        }
                                        }}
                                    />}
            </Styledstack>

            <Styledstack>
                <Button variant="contained" sx={{
                    width:"100%"
                }}><Typography variant='h6'>Send OTP</Typography></Button>
            </Styledstack>

            <Stack spacing={2} textAlign="left" sx={{width:500}}>
                <Typography variant='h5'>Enter OTP</Typography>
            </Stack>

            <Styledstack>
            <TextField id="otp" name="otp" variant="outlined" size='small' placeholder="xxx-xxx"
                                    type="text"
                                    sx={{
                                        size:'small',
                                        width:"100%",
                                        borderRadius:theme.shape.borderRadius,
                                        "&:hover":{
                                            borderBlockColor:theme.palette.success.main
                                        }
                                        }}
                                    />
            </Styledstack>

            <Styledstack sx={{
                marginTop:20,
            }}>
                <Button variant="contained" sx={{
                    width:"100%"
                }}><Typography variant='h6'>Recovery Password</Typography></Button>
            </Styledstack>
        </Stack>


            
    </Stack>
  )
}
