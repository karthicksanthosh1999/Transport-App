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
  import img1 from "../../../asserts/Transports/Stroage/img1.jpg";
  import img2 from "../../../asserts/Transports/Stroage/img2.jpg";
  import img3 from "../../../asserts/Transports/Stroage/img3.jpg";
  
  import "../Transport/transport.css";
  import React from "react";
  import { useNavigate } from 'react-router-dom' 
  
  const Stroage = () => {
    const navigate = useNavigate()
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
            <h4 className="t-contant-h">100% SECURE</h4>
            <div style={{marginLeft:"5px", marginRight:'5px'}}>
            <p className="t-contant-p">
            We offer warehousing and distribution services in all over the world serving diverse sectors. We operate a varied range of facilities in different locations depending on the market requirements.
            </p>
            <p className="t-contant-p">
            This includes setting up high quality infrastructure in many developing markets where there is a shortage of good quality facilities. Our aim is to create a platform for customers to have clean, safe and secured warehousing environment with specific focus on hygiene and Health, Safety, Security and the Environment (HSSE).
            </p>
            </div>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <img className="t-img1" src={img2} alt="transport-truck" />
            <img className="t-img2" src={img3} alt="transport-truck" />
            <h4 className="t-contant-h">SPACE AND MORE SPACE</h4>
            <div style={{marginLeft:"5px", marginRight:'5px'}}>
            <p className="t-contant-p">
            Our facilities amount to more than 50,000 square metres of premium multi-temperature storage with web-enabled inventory tracking and storage for standard pallet, shelved, hanging garment and bulk commodities.
            </p>
            <p className="t-contant-p">
            We also provide all necessary value added services to customers from under the same roof such as stickering, co-packing, warranty card insertions, quality control, batching and sequencing, to name a few.
            </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Stroage;
  