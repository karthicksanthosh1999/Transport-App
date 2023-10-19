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
  import img1 from "../../../asserts/Transports/logistic/img1.jpg";
  import img2 from "../../../asserts/Transports/logistic/img2.jpg";
  import img3 from "../../../asserts/Transports/logistic/img3.jpg";
  
  import "../Transport/transport.css";
  import React from "react";
  import { useNavigate } from 'react-router-dom' 
  
  const Logistic = () => {
    const navigate = useNavigate()
    return (
      <div>
        {/* Hero Images  */}
        <div className="service-hero-img">
          <Typography variant="h4" fontWeight="bold" color="#fff" mt={5}>
          Logistic
          </Typography>
        </div>
  
        {/* Breadcrumbs */}
        <div className="about-breadcrumb">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary" sx={{ color: "#940B92" }}>
            Logistic
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
            <h4 className="t-contant-h">5000 m2 OF STORAGE</h4>
            <div style={{marginLeft:"5px", marginRight:'5px'}}>
            <p className="t-contant-p">
            We have over 2000 m2 dedicated & shared warehousing. We offer the ability to store, and all related activities, your products grouped in one of the existing public warehouses. These warehouses store goods of several clients. This exploits the benefits which arise from the increase of scale.
            </p>
            <p className="t-contant-p">
            Personnel, systems, equipment and space can be deployed flexibly. Furthermore, we work with dedicated teams. Thus we guarantee an optimal service for our customers.
            </p>
            </div>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <img className="t-img1" src={img2} alt="transport-truck" />
            <img className="t-img2" src={img3} alt="transport-truck" />
            <h4 className="t-contant-h">SAFE AND ON TIME</h4>
            <div style={{marginLeft:"5px", marginRight:'5px'}}>
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
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Logistic;
  