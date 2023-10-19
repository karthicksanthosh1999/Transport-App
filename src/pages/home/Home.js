import React from "react";
import card1 from "../../asserts/HomePage/card1.jpg";
import card2 from "../../asserts/HomePage/card2.jpg";
import card3 from "../../asserts/HomePage/card3.jpg";
import "./home.css";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import airplane from "../../asserts/HomePage/airplane.png";
import truck from "../../asserts/HomePage/delivery-truck.png";
import warehouse from "../../asserts/HomePage/warehouse.png";
import ship from "../../asserts/HomePage/ship.png";
import { Swiper, SwiperSlide } from "swiper/react";
import customer1 from "../../asserts/HomePage/customer1.jpg";
import customer2 from "../../asserts/HomePage/customer2.jpg";
import customer3 from "../../asserts/HomePage/customer3.jpg";
import customer4 from "../../asserts/HomePage/customer4.jpg";
import formImg from "../../asserts/HomePage/form-img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ScrollBtn from "../../components/ScrollToTop/ScrollBtn";

const Home = () => {
  return (
    <div>
      <HomeSlider />

      <div className="home-card" style={{ backgroundColor: "transparent" }}>
        <Card className="home-card-container">
          <CardMedia
            className="home-card-media"
            component="img"
            height="194"
            image={card1}
            alt="Paella dish"
          />
          <CardContent className="home-card-content">
            <Typography variant="h6" className="home-card-content-h4">
              Sea Delivery
            </Typography>
          </CardContent>
        </Card>
        <Card className="home-card-container">
          <CardMedia
            component="img"
            height="194"
            className="home-card-media"
            image={card2}
            alt="Paella dish"
          />
          <CardContent className="home-card-content">
            <Typography variant="h6" className="home-card-content-h4">
              Air Delivery
            </Typography>
          </CardContent>
        </Card>
        <Card className="home-card-container">
          <CardMedia
            component="img"
            className="home-card-media"
            height="194"
            image={card3}
            alt="Paella dish"
          />
          <CardContent className="home-card-content">
            <Typography variant="h6" className="home-card-content-h4">
              Ground Shipping
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Our Services */}

      <div style={{ backgroundColor: "#171B26" }}>
        <Container sx={{ p: 5, color: "#fff" }}>
          <h1>OUR SERVICES</h1>
          <Grid
            container
            className="home-service-container"
            ml={{ xs: 0, md: 5 }}
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Grid container>
                <img src={airplane} alt="icon" className="home-services-icon" />
                <Grid
                  container
                  xs={8}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  pl={5}
                >
                  <Typography variant="h6" textAlign="start" fontWeight="bold">
                    Transport of Packaged Goods
                  </Typography>
                  <Typography variant="body2" textAlign="start" mt={3}>
                    Truffaut skateboard hashtag, pork belly Odd Future bespoke
                    paleo forage before they sold out meggings Banksy cred.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Grid container xs={12}>
                <img src={truck} alt="icon" className="home-services-icon" />
                <Grid
                  container
                  xs={8}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  pl={5}
                >
                  <Typography variant="h6" textAlign="start" fontWeight="bold">
                    Transport of Packaged Goods
                  </Typography>
                  <Typography variant="body2" textAlign="start" mt={3}>
                    Truffaut skateboard hashtag, pork belly Odd Future bespoke
                    paleo forage before they sold out meggings Banksy cred.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Grid container xs={12}>
                <img
                  src={warehouse}
                  alt="icon"
                  className="home-services-icon"
                />
                <Grid
                  container
                  xs={8}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  pl={5}
                >
                  <Typography variant="h6" textAlign="start" fontWeight="bold">
                    Warehousing and Storage
                  </Typography>
                  <Typography variant="body2" textAlign="start" mt={3}>
                    Truffaut skateboard hashtag, pork belly Odd Future bespoke
                    paleo forage before they sold out meggings Banksy cred.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Grid container xs={12}>
                <img src={ship} alt="icon" className="home-services-icon" />
                <Grid
                  container
                  xs={8}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  pl={5}
                >
                  <Typography variant="h6" textAlign="start" fontWeight="bold">
                    Forwarding Services
                  </Typography>
                  <Typography variant="body2" textAlign="start" mt={3}>
                    Truffaut skateboard hashtag, pork belly Odd Future bespoke
                    paleo forage before they sold out meggings Banksy cred.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className="parallax">
        <Typography variant="h4" color="#fff" pt={6} pb={6} mb={5}>
          What Customers Are Saying About Us
        </Typography>

        <>
          <Container>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="home-customer-swiper"
            >
              <SwiperSlide className="home-customer-swiper-slide">
                <div className="home-slide-container">
                  <img
                    src={customer1}
                    slt="customer"
                    className="home-slider-image"
                  />
                  <div className="home-slide-overlay">
                    <Typography
                      variant="body1"
                      className="home-slide-quots"
                      fontWeight="bold"
                    >
                      Truffaut skateboard hashtag, pork belly Odd Future bespoke
                      paleo forage before they sold out meggings Banksy cred.
                      Bitters plaid banjo High Life, tofu artisan Kickstarter
                      chillwave shabby chic Pitchfork flexitarian pug wayfarers
                      hoodie.{" "}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="home-customer-swiper-slide">
                <div className="home-slide-container">
                  <img
                    src={customer2}
                    slt="customer"
                    className="home-slider-image"
                  />
                  <div className="home-slide-overlay">
                    <Typography
                      variant="body1"
                      className="home-slide-quots"
                      fontWeight="bold"
                    >
                      Truffaut skateboard hashtag, pork belly Odd Future bespoke
                      paleo forage before they sold out meggings Banksy cred.
                      Bitters plaid banjo High Life, tofu artisan Kickstarter
                      chillwave shabby chic Pitchfork flexitarian pug wayfarers
                      hoodie.{" "}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="home-customer-swiper-slide">
                <div className="home-slide-container">
                  <img
                    src={customer3}
                    slt="customer"
                    className="home-slider-image"
                  />
                  <div className="home-slide-overlay">
                    <Typography
                      variant="body1"
                      className="home-slide-quots"
                      fontWeight="bold"
                    >
                      Truffaut skateboard hashtag, pork belly Odd Future bespoke
                      paleo forage before they sold out meggings Banksy cred.
                      Bitters plaid banjo High Life, tofu artisan Kickstarter
                      chillwave shabby chic Pitchfork flexitarian pug wayfarers
                      hoodie.{" "}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="home-customer-swiper-slide">
                <div className="home-slide-container">
                  <img
                    src={customer4}
                    slt="customer"
                    className="home-slider-image"
                  />
                  <div className="home-slide-overlay">
                    <Typography
                      variant="body1"
                      className="home-slide-quots"
                      fontWeight="bold"
                    >
                      Truffaut skateboard hashtag, pork belly Odd Future bespoke
                      paleo forage before they sold out meggings Banksy cred.
                      Bitters plaid banjo High Life, tofu artisan Kickstarter
                      chillwave shabby chic Pitchfork flexitarian pug wayfarers
                      hoodie.{" "}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </>
      </div>

      {/* quote form */}

      <div className="home-form-img">
        <Typography variant="h5" pb={2} pt={5} color="#DA0C81">
          GET YOUR TRANSPORT QUOTE
        </Typography>
        <center>
          <div className="home-underline"></div>
          <Container>
            <Grid
              container
              xs={12}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid container md={4} xs={12}>
                <img
                  src={formImg}
                  alt="truck"
                  className="home-form-img-size"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    boxShadow: "50px",
                  }}
                />
              </Grid>

              <Grid
                container
                md={8}
                xs={12}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <form>
                    <TextField
                      className="home-input"
                      type="text"
                      size="small"
                      margin="normal"
                      variant="standard"
                      label="Location"
                      required
                      sx={{
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                          color: "#fff",
                        },
                      }}
                      fullWidth
                    />
                    <TextField
                      className="home-input"
                      type="text"
                      size="small"
                      margin="normal"
                      variant="standard"
                      label="To Destination"
                      required
                      fullWidth
                      sx={{
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                          color: "#000",
                        },
                      }}
                    />
                    <TextField
                      className="home-input"
                      type="text"
                      size="small"
                      margin="normal"
                      variant="standard"
                      label="Cargo / Persion"
                      required
                      fullWidth
                      sx={{
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                          color: "#000",
                        },
                      }}
                    />
                    <TextField
                      className="home-input"
                      type="email"
                      size="small"
                      margin="normal"
                      variant="standard"
                      label="E-Mail"
                      required
                      fullWidth
                      sx={{
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                          color: "#000",
                        },
                      }}
                    />
                    <TextField
                      className="home-input"
                      type="number"
                      size="small"
                      margin="normal"
                      variant="standard"
                      label="Contact Number"
                      required
                      fullWidth
                      sx={{
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                          color: "#000",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        bgcolor: "#4D4C7D",
                        height: "40px",
                        width: "300px",
                        mt: 3,
                        mb: 3,
                        ":hover": { bgcolor: "#363062" },
                      }}
                    >
                      GET A QUOTE
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </center>
      </div>

      {/* <div
        style={{  backgroundColor: "#fff", fontSize: "36px", paddingTop:'30px', marginTop:"20px"}}
      >
        <Typography variant="h5" fontWeight='bold' mt={5} className="home-underline">CLIENTS THAT TRUST US</Typography>

        <Grid container display='flex' alignItems='center' justifyContent="center" mt={5}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <img src={company1} alt="com[pany"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <img src={company2} alt="com[pany"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <img src={company3} alt="com[pany"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <img src={company4} alt="com[pany"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <img src={company5} alt="com[pany"/>
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
};

export default Home;
