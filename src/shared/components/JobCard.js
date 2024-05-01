import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

function JobCards({jobData}){

    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={12} >
                    {jobData && jobData.jdList && jobData.jdList.map((item)=>(
                        <Grid key={item.jdUid} xs={12} md={6} lg={4}>
                            <Item>xs=453</Item>
                        </Grid>
                    ))} 
                </Grid>
        </Box>
        {/* {jobData && jobData.jdList && jobData.jdList.map((item)=>(
            <div key={item.jdUid}>{item.jdUid}</div>
        ))} */}
        </div>
    )
}

export  default React.memo(JobCards);