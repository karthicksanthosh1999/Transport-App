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
import img1 from "../../asserts/Transports/VehicleService/img1.jpg";
import img2 from "../../asserts/Transports/VehicleService/img2.jpg";
import img3 from "../../asserts/Transports/VehicleService/img3.jpg";

import "../../pages/ServicesPages/Transport/transport.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const VehicleService = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Images  */}
      <div className="service-hero-img">
        <Typography variant="h4" fontWeight="bold" color="#fff" mt={5}>
          Stroage
        </Typography>
      </div>

      {/* Breadcrumbs */}
      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
            Stroage
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
          <img className="t-img1" src={img1} alt="transport-truck" />
          <img className="t-img1" src={img2} alt="transport-truck" />
        </Grid>

        <Grid item xs={12} md={4}>
          <img className="t-img2" src={img3} alt="transport-truck" />
          <h4 className="t-contant-h">THE FULL SERVICE FOR YOUR TRUCK</h4>
          <div style={{ marginLeft: "5px", marginRight: "5px" }}>
            <p className="t-contant-p">
              Whether your truck needs a simple oil change or a complete engine
              rebuild, Bauer Truck Repair can do the job. We have the
              technology, We offer a variety of services for both heavy duty
              trucks and trailers, including our new 24-hour towing service.
              Check out our list of services below. We repair all makes and
              models of tractors and trailers, including Volvo, International,
              Mercedes, Man and more.
            </p>
            <p className="t-contant-p">
              At Transport repair, we understand the need for a company to keep
              their equipment on the road. The best way to do this is through
              preventive maintenance. Regularly scheduled maintenance can help
              to keep the small problems from becoming big problem.
            </p>
            <p className="t-contant-p">
              Our technicians are experienced in the repair of a wide variety of
              makes and models of heavy, medium and light duty trailers. No job
              is too big or too small.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VehicleService;
