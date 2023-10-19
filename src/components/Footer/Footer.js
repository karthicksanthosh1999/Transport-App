import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Divider,
  Container,
} from "@mui/material";
import {
  PhoneAndroid,
  Fax,
  Phone,
  LocationCity,
  LocationOn,
} from "@mui/icons-material";
import "./footer.css";
import logo from "../../asserts/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container xs={12} className="bottom-container">

        {/* About US */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" className="footer-header">
            ABOUT US
          </Typography>
          <img src={logo} alt="logo" height="80px" width="140px" style={{display:"flex"}}/>
          <div className="footer-about-p">
          <Typography variant="body2" className="footer-p" lineHeight="20px">
            For more then 30 years, Transport has been a reliable partner in the
            field of logistics and cargo forwarding.
          </Typography>
          </div>
        </Grid>

        {/* Navigation */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" className="footer-header">
            NAVIGATION
          </Typography>
          <div>
            <Typography variant="body2" className="footer-p">
              <a href="/">Home</a>
            </Typography>
            <Typography variant="body2" className="footer-p">
              <a href="/about">About Us</a>
            </Typography>
            <Typography variant="body2" className="footer-p">
              <a href="/service">Service</a>
            </Typography>
            <Typography variant="body2" className="footer-p">
              <a href="/vehiclefleet">Vehicle Fleet</a>
            </Typography>
            <Typography variant="body2" className="footer-p">
              <a href="/contact">Contact Us</a>
            </Typography>
          </div>
        </Grid>

        {/* TRANSPORT OFFICE */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" className="footer-header">
            TRANSPORT OFFICE
          </Typography>
          <div>
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="body2" className="footer-p">
                  <LocationOn /> Transport ltd. inc. 300 Pennsylvania Ave NW,
                  Washington
                </Typography>
                <Typography variant="body2" className="footer-p">
                  <Phone /> +386 40 4444 1111
                </Typography>
                <Typography variant="body2" className="footer-p">
                  <PhoneAndroid />
                  +386 40 4444 1111
                </Typography>
                <Typography variant="body2" className="footer-p">
                  <Fax /> +386 40 4444 1111
                </Typography>
              </div>
            </Grid>
          </div>
        </Grid>

        {/* WORKING HOURS */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" className="footer-header">
            WORKING HOURS
          </Typography>
          <Typography variant="body2" className="footer-p">
            We work 7 days a week, every day including major holidays. Contact
            us for any info.
          </Typography>
          <Grid item mt={2}>
            <Typography variant="body2" className="footer-p">
              Monday - Friday:{" "}
              <span style={{ float: "right" }}> 7:00 - 17:00 </span>
            </Typography>
            <Typography variant="body2" className="footer-p">
              Saturday: <span style={{ float: "right" }}>7:00 - 12:00</span>
            </Typography>
            <Typography variant="body2" className="footer-p">
              Sunday and holidays:{" "}
              <span style={{ float: "right" }}>8:00 - 10:00</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Divider />
        <Typography variant="body2" textAlign="center" className="bottom-foot">
          Wiznoa | © 2015 Transport, All rights reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
