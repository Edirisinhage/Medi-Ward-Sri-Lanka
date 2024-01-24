import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Theme from './Theme'
import img from '/media/nipuna/SSD FILES/Git Test/Medi-Ward-Sri-Lanka/src/Assest/mainlogo.png'
import { useNavigate } from 'react-router-dom';

const theme=Theme();

export default function Sidebar() {

    const navigate=useNavigate();

    const GotoLeaveApprove=()=>{
        navigate("/leave-approve")
    }

    const GotoProfile=()=>{
        navigate("/profile")
    }

    const GotoScheduling=()=>{
        navigate("/scheduling")
    }

    const GotoViewSchedule=()=>{
        navigate("/view-schedule")
    }

    const GotoHome=()=>{
        navigate("/home")
    }

    const GotoAddWardDetails=()=>{
        navigate("/add-ward-details")
    }

    const GotoRequestLeave=()=>{
        navigate("/request-leave")
    }

    const GotoNews=()=>{
        navigate("/news")
    }

  return (
    <Box>
      <Stack justifyContent="center" alignItems="center">
        <Stack spacing={1.5} sx={{
            marginBottom:"30px",
            marginTop:"30px",
        }}><Button variant="text" onClick={GotoProfile}>
                <Avatar sx={{
                width:100,
                height:100,
                backgroundColor:theme.palette.background.paper,
                }} alt="Remy Sharp" src={img} //here picture should call from back end 
                
                />
            </Button>
            <Typography sx={{color:theme.palette.background.normal}}>Username of Logger</Typography>
        </Stack>
        <Box sx={{width:"100%",
            
                }}>
            <Button  variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                }
                
            }}
            onClick={GotoAddWardDetails}
            ><Typography variant="h5" sx={{color:theme.palette.background.normal,
                [theme.breakpoints.down("sm")]:{
                    fontSize:"16px"
                }
            }}>Add Ward Details</Typography></Button>
        </Box>

        <Box sx={{width:"100%",
            
        }}>
            <Button variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                }
                
            }}
            onClick={GotoHome}
            ><Typography variant="h5" 
            sx={{
                color:theme.palette.background.normal,
                [theme.breakpoints.down("sm")]:{
                    fontSize:"16px"
                }
                }}>
                    Home
                </Typography>
            </Button>
        </Box>

        <Box sx={{width:"100%",
            
        }}>
            <Button variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                },


                
                
            }}
            onClick={GotoLeaveApprove}
            ><Typography variant="h5" 
            sx={{
                color:theme.palette.background.normal,
                [theme.breakpoints.down("sm")]:{
                    fontSize:"16px"
                }
                }}>
                    Leave Approve
                </Typography>
            </Button>
        </Box>

        <Box sx={{
            width:"100%",
        }}>
            <Button variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                }
                
            }}
                onClick={GotoScheduling}
            ><Typography variant="h5" 
            sx={{
                color:theme.palette.background.normal,
                [theme.breakpoints.down("sm")]:{
                    fontSize:"16px"
                }
                }}>
                    Scheduling
                </Typography>
            </Button>
        </Box>

        <Box sx={{
            width:"100%",
        }}>
            <Button variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                }
                
            }}
            onClick={GotoRequestLeave}
            ><Typography variant="h5" 
            sx={{
                color:theme.palette.background.normal,
                [theme.breakpoints.down("sm")]:{
                    fontSize:"16px"
                }
                }}>
                    Request Leave
                
                </Typography>
            </Button>
        </Box>

        <Box sx={{
            width:"100%",
        }}>
            <Button variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                }
                
            }}
            onClick={GotoViewSchedule}
            >
                <Typography variant="h5" 
                sx={{
                    color:theme.palette.background.normal,
                    [theme.breakpoints.down("sm")]:{
                        fontSize:"16px"
                    }
                    }}>
                        View Schedule
                </Typography>
            </Button>
        </Box>

        <Box sx={{
            width:"100%",
        }}>
            <Button variant="outlined" sx={{
                width:"100%",
                height:90,
                borderBlockColor:theme.palette.primary.dark,
                "&:hover":{
                    backgroundColor:theme.palette.secondary.main,
                }
                
            }}
            onClick={GotoNews}
            >
                <Typography variant="h5" 
                sx={{
                    color:theme.palette.background.normal,
                    [theme.breakpoints.down("sm")]:{
                        fontSize:"16px"
                    }
                    }}>
                        News
                </Typography>
            </Button>
        </Box>


      </Stack>
    </Box>
  )
}
