import {
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  DirectionsBoat,
  Download,
  Drafts,
  Fax,
  LocalShipping,
  LocationOn,
  MiscellaneousServices,
  Person,
  Phone,
  PhoneAndroid,
  Storage,
  TaxiAlert,
} from "@mui/icons-material";
import img1 from "../../../asserts/Transports/passanger/img1.jpg";
import img2 from "../../../asserts/Transports/passanger/img2.jpg";
import img3 from "../../../asserts/Transports/passanger/img3.jpg";

import "../Transport/transport.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Passenger = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Images  */}
      <div className="service-hero-img">
        <Typography variant="h4" fontWeight="bold" color="#fff" mt={5}>
          Passanger Transport
        </Typography>
      </div>

      {/* Breadcrumbs */}
      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
            Passanger Transport
          </Typography>
        </Breadcrumbs>
      </div>

      {/* ListItem */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        xs={12}
        mb={5}
      >
         <Grid item xs={12} md={4}>
            <Container>
              <h3 className="t-nav-h">Navigation</h3>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/transport')}>
                      <ListItemIcon>
                        <LocalShipping />
                      </ListItemIcon>
                      <ListItemText primary="Transport" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/logistic')}>
                      <ListItemIcon>
                        <DirectionsBoat />
                      </ListItemIcon>
                      <ListItemText primary="Logistic" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/passanger')}>
                      <ListItemIcon> 
                        <Person />
                      </ListItemIcon>
                      <ListItemText primary="Passanger Transport" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/towservices')}>
                      <ListItemIcon>
                        <MiscellaneousServices />
                      </ListItemIcon>
                      <ListItemText primary="Tow Services" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/vehicleservice')}>
                      <ListItemIcon>
                        <TaxiAlert />
                      </ListItemIcon>
                      <ListItemText primary="Vehicle Service" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/stroage')}>
                      <ListItemIcon>
                        <Storage />
                      </ListItemIcon>
                      <ListItemText primary="Storage" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </List>
              </nav>
  
              <h3 className="t-nav-h">Download Brochures</h3>
              <Grid container direction='column' gap={2} alignItems='flex-start' justifyContent='space-evenly'>
              <Button variant="outlined" startIcon={<Download />}>Vechile List.pdf</Button>
              <Button variant="outlined" startIcon={<Download />}>Catalogue.pdf</Button>
              </Grid>
  
              <h3 className="t-nav-h">Our office</h3>
              <Typography variant="h6" className="footer-header">
                TRANSPORT OFFICE
              </Typography>
  
              <div>
                <Grid
                  container
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={-5}
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
            </Container>
          </Grid>

        <Grid item xs={12} md={4}>
          <img className="t-img1" src={img2} alt="transport-truck" />
          <img className="t-img2" src={img3} alt="transport-truck" />
          <h4 className="t-contant-h">THE INITIAL PLANNING</h4>
          <div style={{ marginLeft: "5px", marginRight: "5px" }}>
            <p className="t-contant-p">
              We welcome you to our offices to plan present our plans for the
              route you would like to join. We offer professional guides either
              for group travels or for personal travels. You can choose of many
              plans we offer.
            </p>
            <p className="t-contant-p">
              We also offer cooperation for travel agencies. Competitive prices
              and excellent service will enrich your services you offer. We
              operate in 15 countries stretching over 3 continents with over 200
              employees .
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <img className="t-img1" src={img1} alt="transport-truck" />
          <h4 className="t-contant-h">FROM START TO FINISH</h4>
          <div style={{ marginLeft: "5px", marginRight: "5px" }}>
            <p className="t-contant-p">
              Our air conditioned modern vehicle fleet offers a joy of travel.
              With extensive movie collection, 1 class dining experience it is
              truly mos accommodating services on the market, with professional
              staff and veteran drivers you will reach your destination safely
              and on time.
            </p>
            <p className="t-contant-p">
              We also offer smaller personal type transportation ranging from 1
              person to 12 person seating capacity and with private routes to
              take you can truly make this your unforgettable experience.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Passenger;
