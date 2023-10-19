import React from 'react'
import { Grid, Typography, Button, IconButton, Box, Container } from '@mui/material'
import { Inventory, Public, Settings, ThumbUpOffAlt } from '@mui/icons-material'
import './second.css'

const SecondPart = () => {
    return (
        <div>
            <Grid container xs={12} display='flex' alignItems='center' justifyContent='space-between'>

                <Grid container xs={12} md={6} lg={4}>
                    <Box>
                        <Grid item xs={12} mt={3}>
                            <div className='sp-icon-head'>
                                <IconButton className='sp-icon-btn'>
                                    <Public />
                                </IconButton>
                                <div>
                                    <Typography variant='h6'>World Wide Transport</Typography>
                                    <Typography className='sp-icon-text' variant='body1'>Any destination you need</Typography>
                                </div>
                            </div>
                            <div className='sp-icon-p'>
                                <Typography className='sp-icon-child-text' variant='body2'>In accordance with your needs we organise domestic and international deliveries of collective, complete and partial shipments.</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <div className='sp-icon-head'>
                                <IconButton className='sp-icon-btn'>
                                    <ThumbUpOffAlt />
                                </IconButton>
                                <div>
                                    <Typography variant='h6'>100% guaranteed</Typography>
                                    <Typography className='sp-icon-text' variant='body1'>We stand by our service</Typography>
                                </div>
                            </div>
                            <div className='sp-icon-p'>
                                <Typography className='sp-icon-child-text' variant='body2'>Safe and on time delivery of your goods is our primary concern. with top notch staff highly modernised vehicles we are confident we can do it.</Typography>
                            </div>
                        </Grid>
                    </Box>
                </Grid>

                <Grid container xs={12} md={6} lg={4}>
                    <Box>
                        <Grid item xs={12} mt={3}>
                            <div className='sp-icon-head'>
                                <IconButton className='sp-icon-btn'>
                                    <Inventory />
                                </IconButton>
                                <div>
                                    <Typography variant='h6'>World Wide Transport</Typography>
                                    <Typography className='sp-icon-text' variant='body1'>Any destination you need</Typography>
                                </div>
                            </div>
                            <div className='sp-icon-p'>
                                <Typography className='sp-icon-child-text' variant='body2'>In accordance with your needs we organise domestic and international deliveries of collective, complete and partial shipments.</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <div className='sp-icon-head'>
                                <IconButton className='sp-icon-btn'>
                                    <Settings />
                                </IconButton>
                                <div>
                                    <Typography variant='h6'>World Wide Transport</Typography>
                                    <Typography className='sp-icon-text' variant='body1'>Any destination you need</Typography>
                                </div>
                            </div>
                            <div className='sp-icon-p'>
                                <Typography className='sp-icon-child-text' variant='body2'>In accordance with your needs we organise domestic and international deliveries of collective, complete and partial shipments.</Typography>
                            </div>
                        </Grid>
                    </Box>
                </Grid>

                <Grid container xs={12} md={6} lg={4}>
                    <img src='./img1.jpg' />
                    <div className='sp-icon-p'>
                        <Typography variant='h6'>2000m2 STORAGE</Typography>
                        <Typography className='sp-icon-child-text' variant='body2'>In accordance with your needs we organise domestic and international deliveries of collective, complete and partial shipments.</Typography>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default SecondPart