import React, { useState } from "react";
import "./aboutus.css";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import img1 from "../../asserts/AboutPage/img1.jpg";
import img2 from "../../asserts/AboutPage/img1-1.jpg";
import img3 from "../../asserts/AboutPage/img2.jpg";
import img4 from "../../asserts/AboutPage/img3.jpg";
import img5 from "../../asserts/AboutPage/img4.jpg";
import img6 from "../../asserts/AboutPage/img5.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const AboutUs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="about-container">
        <div className="about-div">
          <h4 style={{color:'#ADBDD5'}}>About US</h4>
        </div>
      </div>

      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
            About Us
          </Typography>
        </Breadcrumbs>
      </div>

  <Container maxWidth='xl'>
      <div>
        <Grid container xs={12}>
          <Grid item xs={12} md={6}>
            <img
              src={img1}
              alt="buliding"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            mt={{ xs: 3, md: 0 }}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="left"
              sx={{ color: "#940B92" }}
            >
              Comprehensive logistics and transportation solutions form the core
              of our business – from procurement logistics right through to
              delivery.
            </Typography>
            <Typography variant="body1" textAlign="left">
              Mixtape taxidermy plaid crucifix, Cosby sweater occupy
              cold-pressed Portland pop-up lo-fi PBR&B kale chips readymade.
              Flexitarian bitters Shoreditch literally paleo. Vice letterpress
              Bushwick direct trade fingerstache tattooed. Stumptown flannel
              mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>

      <div>
        <Container maxWidth="lg">
        <Typography variant="h5" textAlign="left" fontWeight="bold" mt={5}>
            COMPANY
          </Typography>
          <div className="about-companyunderline"></div>
          <Grid container xs={12} mt={5}>
            <Grid container lg={6} xs={12}>
              <div className="img-hover-zoom">
              <img src={img3} alt="truck-big" className="big-truck" />
              </div>
            </Grid>

            <Grid
              container
              lg={6}
              xs={12}
              direction="row"
              alignItems="start"
              justifyContent="space-evenly"
            >
              <Grid item md={6} xs={12}>
              <div className="img-hover-zoom">
                <img src={img2} alt="truck3" className="truck-size" />
              </div>
                <Typography variant="h6" textAlign="left">
                  COMPANY HISTORY
                </Typography>
                <Typography variant="body2" textAlign="left">
                  Our journey started in 1982 in Slovenia/Ljubljana. With just
                  one truck we grew in matter of years to a corporate that
                  employees over 500 workers in 10 different countries.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
              <div className="img-hover-zoom">
                <img src={img4} alt="truck3" className="truck-size" />
                </div>
                <Typography variant="h6" textAlign="left">
                  OUR MISSION
                </Typography>
                <Typography variant="body2" textAlign="left">
                  Transport is committed to ensuring customers’ needs for
                  quality shipping, logistics and truck service are understood
                  and met. We deliver on our promises with precision and
                  guarantee.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
              <div className="img-hover-zoom">
                <img src={img5} alt="truck3" className="truck-size" />
              </div>
                <Typography variant="h6" textAlign="left">
                  COMPANY VISION
                </Typography>
                <Typography variant="body2" textAlign="left">
                  We are striving for excellence in everything we do, driven by
                  a sense of urgency and a wish to meet all your needs. This
                  personal features are our corporate signature.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
              <div className="img-hover-zoom">
                <img src={img6} alt="truck3" className="truck-size" />
              </div>
                <Typography variant="h6" textAlign="left">
                  EXPANDING GOAL
                </Typography>
                <Typography variant="body2" textAlign="left">
                  We currently strive to open 4 more locations in 3 different
                  countries. By 2017 we want to move to rail, air and sea
                  transport. With that kind of network we will be able to cover
                  global industry.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* <div>
        <Container>
          <Typography variant="h5" textAlign="left" fontWeight="bold">
            BOARD OF DIRECTORS
          </Typography>
          <div className="about-hr"></div>
          <div>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
              }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ border: 1, borderColor: "divider"}}
              >
                <Tab label="Arivu Karthick" {...a11yProps(0)} />
                <Tab label="Joseph Karthick" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Box>
                  <Grid container xs={12}>

                    
                      <img src={img4} alt="jk" className="about-tab-img"/>
                    
                    <Grid container>
                      <Typography variant="h6" className="about-tab-title">William Kerry</Typography>
                      <Typography variant="body1" className="about-tab-sub">Managing Director</Typography>
                      <Typography variant="subtitle2" className="about-tab-title">
                        Mixtape taxidermy plaid crucifix, Cosby sweater occupy
                        cold-pressed Portland pop-up lo-fi PBR&B kale chips
                        readymade. Flexitarian bitters Shoreditch literally
                        paleo. Vice letterpress Bushwick direct trade
                        fingerstache tattooed. Stumptown flannel mlkshk
                        wayfarers forage, plaid VHS drinking vinegar quinoa YOLO
                      </Typography>
                    </Grid>

                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>
            </Box>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default AboutUs;
