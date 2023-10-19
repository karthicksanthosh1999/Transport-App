import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'
import { PhoneAndroid, Fax, Phone, LocationCity, LocationOn } from '@mui/icons-material'
import './bottom.css'

const Bottom = () => {
    return (
        <div >

            <Grid container xs={12} className='bottom-container'>
                {/* About US */}
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h6'>ABOUT US</Typography>
                    <Typography variant="h4">Logo</Typography>
                    <Typography variant='body2'>
                        For more then 30 years, Transport has been a reliable partner in the field of logistics and cargo forwarding.
                    </Typography>
                </Grid>

                {/* Navigation */}
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h6'>NAVIGATION</Typography>
                    <div>
                        <ul className='bottom-li-navigation'>
                            <li><a>Home</a></li>
                            <li><a>Service</a></li>
                            <li><a>Vehicle Fleet</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                </Grid>

                {/* TRANSPORT OFFICE */}
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h6'>TRANSPORT OFFICE</Typography>
                    <div>
                        <Grid container display='flex' alignItems='center' justifyContent='space-between' >

                            <div>
                                <ul className='bottom-li-transport'>
                                    <li><LocationOn /> Transport ltd. inc. 300 Pennsylvania Ave NW, Washington</li>
                                    <li><Phone /> +386 40 4444 1111</li>
                                    <li><PhoneAndroid />+386 40 4444 1111</li>
                                    <li><Fax /> +386 40 4444 1111</li>
                                </ul>
                            </div>
                        </Grid>
                    </div>
                </Grid>
                {/* WORKING HOURS */}
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h6'>WORKING HOURS</Typography>
                    <Typography variant='body2'>
                        We work 7 days a week, every day including major holidays. Contact us for any info.
                    </Typography>
                    <Grid item mt={2}>
                        <Typography variant='body2'>
                            Monday - Friday: <span style={{float:'right'}}> 7:00 - 17:00 </span>
                        </Typography>
                        <Typography variant='body2'>
                        Saturday: <span style={{float:'right'}}>7:00 - 12:00</span>
                        </Typography>
                        <Typography variant='body2'>
                        Sunday and holidays: <span style={{float:'right'}}>8:00 - 10:00</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <div >
                <hr />
                <Typography variant='body2' textAlign='center' className='bottom-foot'>
                    Transport wordpress theme | © 2015 Transport, All rights reserved
                </Typography>
            </div>
        </div>
    )
}

export default Bottom