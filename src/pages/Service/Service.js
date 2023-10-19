import { Box, Breadcrumbs, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import icon1 from "../../asserts/ServicePage/icon1.png";
import icon2 from "../../asserts/ServicePage/icon2.png";
import icon3 from "../../asserts/ServicePage/icon3.png";
import icon4 from "../../asserts/ServicePage/icon4.png";
import container from "../../asserts/ServicePage/container.jpg";
import card1 from "../../asserts/ServicePage/card1.jpg";
import card2 from "../../asserts/ServicePage/card2.jpg";
import card3 from "../../asserts/ServicePage/card3.jpg";
import card4 from "../../asserts/ServicePage/card4.jpg";
import "./service.css";

const Service = () => {
  return (
    <div>
      {/* Hero Images  */}
      <div className="service-hero-img">
        <Typography variant="h4" fontWeight="bold" color="#ADBDD5">
          Services Details
        </Typography>
      </div>

      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
            Service
          </Typography>
        </Breadcrumbs>
      </div>
      
      <div>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
            <img className="service-icons" src={icon1} alt="icon" />
            <Typography
              variant="h6"
              fontWeight="bold"
              className="services-title"
            >
              Professional Storage
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              className="services-sub"
            >
              Trust fund paleo cray swag, health goth mixtape Carles deep v
              mustache craft beer retro Williamsburg High Life Godard. 90’s
              narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra
              farm-to-table pork belly Pitchfork, Odd Future food truck 90’s
              Helvetica.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className="service-icons" src={icon2} alt="icon" />
            <Typography
              variant="h6"
              fontWeight="bold"
              className="services-title"
            >
              Professional Distribution
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              className="services-sub"
            >
              Trust fund paleo cray swag, health goth mixtape Carles deep v
              mustache craft beer retro Williamsburg High Life Godard. 90’s
              narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra
              farm-to-table pork belly Pitchfork, Odd Future food truck 90’s
              Helvetica.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className="service-icons" src={icon3} alt="icon" />
            <Typography
              variant="h6"
              fontWeight="bold"
              className="services-title"
            >
              Cross Docking
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              className="services-sub"
            >
              Trust fund paleo cray swag, health goth mixtape Carles deep v
              mustache craft beer retro Williamsburg High Life Godard. 90’s
              narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra
              farm-to-table pork belly Pitchfork, Odd Future food truck 90’s
              Helvetica.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className="service-icons" src={icon4} alt="icon" />
            <Typography
              variant="h6"
              fontWeight="bold"
              className="services-title"
            >
              Dedicated Warehouses
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              className="services-sub"
            >
              Trust fund paleo cray swag, health goth mixtape Carles deep v
              mustache craft beer retro Williamsburg High Life Godard. 90’s
              narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra
              farm-to-table pork belly Pitchfork, Odd Future food truck 90’s
              Helvetica.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Parllex Effect */}

      <div className="service-parallex">
        <h4 className="service-parallex-h4">Trust fund paleo cray swag, health goth mixtape Carles deep v mustache craft beer retro Williamsburg High Life Godard. 90’s narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra farm-to-table pork belly Pitchfork, Odd Future food truck 90’s Helvetica.</h4>
      </div>
      <div className="service-img-container"></div>

      {/* Others Services */}

      <div>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mt={5}
            color="#940B92"
          >
            OTHERS SERVICES
          </Typography>
          <Box>
            <Typography
              variant="body1"
              textAlign="center"
              fontWeight="bold"
              mt={3}
            >
              Artisan selvage art party Godard, forage Austin Pitchfork. Organic
              tofu vinyl VHS cold-pressed gastropub. Tousled letterpress
              actually irony Vice farm-to-table. Street art you probably haven’t
              heard of them bicycle rights Cosby sweater small batch, PBR&B
              lomo.
            </Typography>
          </Box>
          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} md={6} lg={3}>
              <div className="service-card-container">
                <img src={card1} alt="card" className="service-card-img" />
                <div className="service-card-overlay">
                  <div className="service-card-txt">See More</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <div className="service-card-container">
                <img src={card2} alt="card" className="service-card-img" />
                <div className="service-card-overlay">
                  <div className="service-card-txt">See More</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <div className="service-card-container">
                <img src={card3} alt="card" className="service-card-img" />
                <div className="service-card-overlay">
                  <div className="service-card-txt">See More</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <div className="service-card-container">
                <img src={card4} alt="card" className="service-card-img" />
                <div className="service-card-overlay">
                  <div className="service-card-txt">See More</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Service;
