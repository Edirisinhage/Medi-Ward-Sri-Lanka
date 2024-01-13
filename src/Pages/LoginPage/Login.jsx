import { styled } from '@mui/system'
import { Box,Button,IconButton,InputAdornment,Modal,Paper, Stack,TextField,Typography} from '@mui/material'
import React, { useState } from 'react'
import Theme from '../../Component/Theme'; //**** Special import*/
import {ThemeProvider} from '@mui/material';
import img1 from '/media/nipuna/SSD FILES/Git Test/medi-ward-sri-lanka/src/Assest/mainlogo.png'
import {Visibility, VisibilityOff } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import Recovery from './Recovery';


const theme=Theme();

const DemoPaper = styled(Paper)(({ theme }) => ({

    width: 1100,
    height:800,
    textAlign: 'center',
    borderRadius:theme.shape.borderRadius*6,
    [theme.breakpoints.down("md")]:{
        width:900,
        height:600,
    }
  }));

const UserTitleBox=styled(Stack)(({theme})=>({
    marginTop:"100px",
    marginBottom:"70px",
    width:500,
    [theme.breakpoints.down("md")]:{
        width:350,
    },
    //backgroundColor:"red",
    //paddingLeft:"100px",
    //paddingRight:"100px",
    textAlign:"center",

}))

const UserText=styled(Stack)(({theme})=>({
    //marginTop:"7px",
    //marginBottom:"7px",
    //backgroundColor:"blue",
    //marginRight:"3px",
    //marginLeft:"3px",
    textAlign:"left",
    width:500,
    [theme.breakpoints.down("md")]:{
        width:350,
    }
}))

const UserInputBox=styled(Stack)(({theme})=>({
    
    //marginTop:"7px",
    //marginBottom:"7px",
    //backgroundColor:"yellow",
    //marginRight:"3px",
    //marginLeft:"3px",
    textAlign:"left",
    width:500,
    [theme.breakpoints.down("md")]:{
        width:350,
    }
}))

const RecoveryModal=styled(Modal)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

}))


const Login = () => {

    const [showPassword,setShowPassword]=useState(false);

    const [recoveryModel,setRecoveryModel]=useState(false);

    const recoveryModelOpen=()=>{
        setRecoveryModel(true);

    }

    const recoveryModelClose=()=>{
        setRecoveryModel(false);
    }

   
  return (
    <ThemeProvider theme={theme}>
        <Stack  display="flex" direction="row" justifyContent="center"  alignItems="center" sx={{
            marginTop:6,
            marginBottom:6,
            backgroundColor:theme.palette.background.normal,
        }}>
            <DemoPaper elevation={6}>
                <Stack display="flex" direction="row" justifyContent="space-between"
                    sx={{
                        [theme.breakpoints.down("sm")]:{
                            display:"block"
                        }
                    }}
                        
                >
                    <Box flex="45%" sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:theme.palette.primary.main,
                        height:800,
                        borderTopLeftRadius:theme.shape.borderRadius*6,
                        borderBottomLeftRadius:theme.shape.borderRadius*6,
                        [theme.breakpoints.down("sm")]:{
                            height:300,
                        }
                    
                        }}

                    >
                        <img src={img1} alt='Main_Logo' width="350px" height="380px"
                        sx={{
                            [theme.breakpoints.down("md")]:{
                                width:"200px",
                                height:"150px",
                            }
                        }}></img>
                    
                    </Box>

                    <Box flex="55%" sx={{ 
                        height:800,
                        borderTopRightRadius:theme.shape.borderRadius*6,
                        borderBottomRightRadius:theme.shape.borderRadius*6,
                        backgroundColor:theme.palette.background.paper

                        }}
                    >   
                        <Stack display="flex" direction="column" alignItems="center"
                        >
                            <UserTitleBox>
                                <Typography variant="h3">Welcome!</Typography>
                            </UserTitleBox>

                            <Stack display="flex" direction="column" spacing={2}>
                                <UserText>
                                    <Typography variant='h5'>Username</Typography>
                                </UserText>

                                <UserInputBox>

                                    <TextField id="username" name="username" variant="outlined" placeholder="Enter your username" size='small'sx={{
                    
                                        size:'small',
                                        width:"100%",
                                        borderRadius:theme.shape.borderRadius,
                                        "&:hover":{
                                            borderBlockColor:theme.palette.success.main
                                        }
                                        }}

                                        InputProps={{

                                            endAdornment: (
                                        
                                              <InputAdornment position="end">
                                        
                                                <PersonIcon />
                                        
                                              </InputAdornment>
                                        
                                            ),
                                        
                                         }}
                                    />
                                </UserInputBox>

                                <UserText>
                                    <Typography variant='h5'>Password</Typography>
                                </UserText>

                                <UserInputBox>

                                    <TextField id="pwd" name="password" variant="outlined" size='small'
                                    type={showPassword? "text":"password"}
                                    sx={{
                                        placeholder:"Enter your password",
                                        size:'small',
                                        width:"100%",
                                        borderRadius:theme.shape.borderRadius,
                                        "&:hover":{
                                            borderBlockColor:theme.palette.success.main
                                        }
                                        }}
                                    InputProps={{

                                            endAdornment: (
                                        
                                              <InputAdornment position="end">
                                        
                                                <IconButton
                                        
                                                  edge="end"
                                        
                                                  onClick={()=>setShowPassword(true)}

                                                  onBlur={()=>setShowPassword(false)}
                                        
                                                >
                                        
                                                  {showPassword ? <Visibility /> : <VisibilityOff/>}
                                        
                                                </IconButton>
                                        
                                              </InputAdornment>
                                        
                                            ),
                                        
                                    }}
                                    />
                                </UserInputBox>
  
                            </Stack>

                            <Stack display="flex" direction="row" justifyContent="space-between" sx={{
                                    width:500,
                                    marginTop:"40px",
                                    marginBottom:"40px",
                                    [theme.breakpoints.down("md")]:{
                                        width:350,
                                    }
                                    }}
                                    
                                >
                                    <Box 
                                        flex="50%" 
                                        sx={{
                                            textAlign:"left",
                                        }}
                                    >
                                        <Button 
                                            variant="text" 
                                            sx={{color:theme.palette.link.main}}
                                            onClick={recoveryModelOpen}
                                        >
                                                <Typography variant='subtitle2'>Reset Password</Typography>
                                        </Button>
                                        <RecoveryModal
                                            open={recoveryModel}
                                            aria-labelledby="parent-modal-title"
                                            aria-describedby="parent-modal-description"
                                        >
                                            <Recovery setRecoveryModel={setRecoveryModel}/>
                                        </RecoveryModal>
                                    </Box>


                                    <Box 
                                        flex="50%" 
                                        sx={{
                                            textAlign:"right",  
                                        }}
                                    >   
                                        <Button 
                                            variant="text" 
                                            sx={{color:theme.palette.link.main}}
                                        >
                                            <Typography variant='subtitle2'>Customer Suppprt</Typography>
                                        </Button>
                                    </Box>
                            </Stack>
                            
                            <Stack>
                                <Button variant='contained'sx={{
                                    marginTop:"40px",
                                    width:500,
                                    height:40,
                                    [theme.breakpoints.down("md")]:{
                                        width:350,
                                        height:35,
                                    },
                                    //borderRadius:theme.shape.borderRadius*0.75,
                                    color:"White",
                                    "&:hover":{
                                        backgroundColor:theme.palette.secondary.main,
                                    }
                                    
                                }}><Typography variant='h6'>Login</Typography></Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                
            </DemoPaper>
        </Stack>
    </ThemeProvider>
  )
}

export default Login
