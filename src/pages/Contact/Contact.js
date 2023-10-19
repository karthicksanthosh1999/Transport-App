import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Container,
  Breadcrumbs,
  Link,
  IconButton,
} from "@mui/material";
import {
  PhoneAndroid,
  Fax,
  Phone,
  LocationCity,
  LocationOn,
  WhatsApp,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import img1 from "../../asserts/contactPage/contactimg.png";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      {/* Google Map */}

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.776542535089!2d78.13216937409447!3d9.952541173851449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45e8c0674c75c451%3A0xbc9dec01a60c6010!2sWIZinoa!5e0!3m2!1sen!2sin!4v1697525908728!5m2!1sen!2sin"
          width="1000"
          height="300"
          className="google-map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
            Contact Us
          </Typography>
        </Breadcrumbs>
      </div>

      {/* Locations */}

      <Container>
        <Grid container>
          <Grid xs={12} md={6} lg={4}>
            <h4 className="cp-title">LOGISTIC (HEADQUARTERS)</h4>
            <div className="cp-underline "></div>
            <h5 className="cp-subtitle">Global Logistic, London</h5>
            <p className="cp-p">
              4-5 Spring St, London‎ <br /> Tel: +44 20 8786 7200 <br /> Fax:
              +44 20 8786 7200 <br />
              Email: info@yourdomain.com
            </p>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <h4 className="cp-title">LOGISTIC ITALY</h4>
            <div className="cp-underline "></div>
            <h5 className="cp-subtitle">
              Logistic Italy Headquarters (Rome Office)
            </h5>
            <p className="cp-p">
              SIG MARIO ROSSI VIALE EUROPA 22 00144 <br /> Tel: +44 20 8786 7200{" "}
              <br /> Fax: +44 20 8786 7200
              <br />
              Email: info@yourdomain.com
            </p>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <h4 className="cp-title">LOGISTIC GERMANY</h4>
            <div className="cp-underline "></div>
            <h5 className="cp-subtitle">
              Logistic Germany Headquarters (Munich Office)
            </h5>
            <p className="cp-p">
              Schwanthaler Straße 75a
              <br /> Tel: +49-(0)89-360908-0
              <br /> Fax: +49-(0)89-360908-0 <br />
              Email: info@yourdomain.com
            </p>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <h4 className="cp-title">LOGISTIC USA</h4>
            <div className="cp-underline "></div>
            <h5 className="cp-subtitle">
              Logistic USA Headquarters (NewYork Office)
            </h5>
            <p className="cp-p">
              44 East 2nd Street New York, NY 10003 <br /> Tel: +44 20 8786 7200{" "}
              <br /> Fax: +44 20 8786 7200
              <br />
              Email: info@yourdomain.com
            </p>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <h4 className="cp-title">LOGISTIC JAPAN</h4>
            <div className="cp-underline "></div>
            <h5 className="cp-subtitle">
              Logistic Japan Headquarters (Tokyo Office)
            </h5>
            <p className="cp-p">
              Sunny Mansion #203 4-7 Hommachi 2-choume
              <br /> Tel: +44 20 8786 7200 <br /> Fax: +44 20 8786 7200 <br />
              Email: info@yourdomain.com
            </p>
          </Grid>
        </Grid>
      </Container>

      <Grid container xs={12}>
        <Grid container md={6} xs={12} mt={12}>
          <Grid container direction="column">
            <h3 className="cp-contact-title">SEND US A MESSAGE</h3>{" "}
            <div className="cp-contact-align-hr">
              <div className="cp-contact-underline"></div>
            </div>
            <br></br>
            <form>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                padding={3}
              >
                <Grid container xs={12}>
                  <TextField
                    placeholder="Name"
                    variant="standard"
                    type="text"
                    size="medium"
                    margin="normal"
                    autoComplete="off"
                    fullWidth
                    required
                  />
                  <TextField
                    placeholder="Email"
                    variant="standard"
                    type="email"
                    size="medium"
                    margin="normal"
                    autoComplete="off"
                    fullWidth
                    required
                  />
                  <Grid item />
                  <TextField
                    placeholder="Subject"
                    variant="standard"
                    type="text"
                    size="medium"
                    margin="normal"
                    autoComplete="off"
                    fullWidth
                    required
                  />
                  <TextField
                    placeholder="Message"
                    variant="standard"
                    type="text"
                    size="medium"
                    margin="normal"
                    autoComplete="off"
                    fullWidth
                    required
                  />
                  <button class="cta">
                    <span>Send</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Grid>
              </Grid>
            </form>
            <div>
              <Grid container display='flex' alignItems='center' justifyContent='center' mt={5}>

                <Grid item>
                  <IconButton>
                    <WhatsApp fontSize="large" sx={{':hover':{color:'green'}}}/>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Facebook fontSize="large" sx={{':hover':{color:'green'}}}/>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Instagram fontSize="large" sx={{':hover':{color:'green'}}}/>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Twitter fontSize="large" sx={{':hover':{color:'green'}}}/>
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container md={6} xs={12}>
          <img src={img1} className="contact-img" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
