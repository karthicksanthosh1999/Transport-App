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
  Delete,
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
import img1 from "../../../asserts/Transports/img1.jpg";
import img2 from "../../../asserts/Transports/img2.jpg";
import img3 from "../../../asserts/Transports/img3.jpg";

import "./transport.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Transport = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Images  */}
      <div className="service-hero-img">
        <Typography variant="h4" fontWeight="bold" color="#fff" mt={5}>
          Transport
        </Typography>
      </div>

      {/* Breadcrumbs */}
      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
            Transport
          </Typography>
        </Breadcrumbs>
      </div>

      {/* ListItem */}
      <Grid container direction='row' alignItems='center' justifyContent='center' xs={12} mb={5}>

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
          <h4 className="t-contant-h">TRANSPORT</h4>
          <p className="t-contant-p">
            Transport activity is to distribute packed goods in Full Truck Loads
            by road solutions. We are operate world wide. With some 450.000
            shipments a year, Transport is one of the biggest forwarders in
            Europe and abroad and is particularly active in transport &
            logistics services. To satisfy customer-specific wishes, we
            supplements its own ultra-modern fleet and network with an extensive
            network of subcontractors and partners who work under the
            responsibility and control of our company. They are monitored by the
            forward management system developed by in house, fixed charter
            procedures and monthly KPI reports.
          </p>
        </Grid>

        <Grid item xs={12} md={4}>
          <img className="t-img1" src={img2} alt="transport-truck" />
          <img className="t-img2" src={img3} alt="transport-truck" />
          <h4 className="t-contant-h">SAFE AND ON TIME</h4>
          <p className="t-contant-p">
            Safety of your cargo is our primary goal. With modern fleet and fist
            class staff we offer a complete solution from storage to delivery.
            We are the leading Company in more then 10 countries.
          </p>
          <p className="t-contant-p">
            Cargo consists of the transport of packed goods. Its operations
            comprises mainly of FTLs (Full Truck Loads), part loads and
            intermodal transport. The markets Transport service include the
            automotive, consumer electronics, retail and construction
            industries.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Transport;
