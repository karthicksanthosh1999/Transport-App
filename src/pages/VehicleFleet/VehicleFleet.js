import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useState } from "react";
import "./vehicleFleet.css";
import {Alltrucks,Prime,Big,Short} from "../../data"

const VehicleFleet = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  return (
    <div>
      <div className="vehiclef-container">
        <div className="vehiclef-div">
          <h4>Vehicle Fleet</h4>
        </div>
      </div>
      <div className="about-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
          Vehicle Fleet
          </Typography>
        </Breadcrumbs>
      </div>
      <Container>
        <div>
          <Typography className="vf-title" variant="h4" textAlign="start" mt={5}>
            OUR FLEET
          </Typography>
          <div className="vf-border"></div>
          <p className="vf-p">
            Curabitur maximus feugiat velit, sed dapibus sem auctor quis.
            Maecenas turpis purus, tincidunt eget mattis ac, placerat sit amet
            dolor. Aenean vel porttitor libero, nec tempor magna. Mauris sed ex
            at tellus elementum tempus dignissim ac est. Curabitur maximus
            feugiat velit, sed dapibus sem auctor quis.
          </p>
        </div>
        <div>
          <React.Fragment>
            <Tabs
              sx={{mt:5}}
              value={currentTabIndex}
              onChange={handleTabChange}>
              <Tab label="ALL TRUCKS" className="vf-tab"/>
              <Tab label="SHORT TRUCKS" className="vf-tab" />
              <Tab label="PRIME TRUCKS" className="vf-tab" />
              <Tab label="BIG LOAD TRUCKS" className="vf-tab" />
            </Tabs>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
              <Box sx={{ p: 3 }}>
                <Grid
                  container
                  xs={12}
                  direction="row"
                  columnGap={5}
                  alignItems="center"
                  justifyContent="space-around"
                  rowSpacing={3}
                >
                  {Alltrucks.map((item) => (
                    <Grid item xs={12} md={4} lg={3} key={item.id}>
                      <img className="vf-img" src={item.img} alt="1" />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
             <Box sx={{ p: 3 }}>
             <Grid
               container
               xs={12}
               direction="row"
               columnGap={5}
               alignItems="center"
               justifyContent="space-around"
               rowSpacing={3}
             >
               {Prime.map((item) => (
                 <Grid item xs={12} md={4} lg={3} key={item.id}>
                   <img className="vf-img" src={item.img} alt="1" />
                 </Grid>
               ))}
             </Grid>
           </Box>
            )}

            {/* TAB 3 Contents */}
            {currentTabIndex === 2 && (
              <Box sx={{ p: 3 }}>
              <Grid
                container
                xs={12}
                direction="row"
                columnGap={5}
                alignItems="center"
                justifyContent="space-around"
                rowSpacing={3}
              >
                {Short.map((item) => (
                  <Grid item xs={12} md={4} lg={3} key={item.id}>
                    <img className="vf-img" src={item.img} alt="1" />
                  </Grid>
                ))}
              </Grid>
            </Box>
            )}

            {/* TAB 4 Contents */}
            {currentTabIndex === 3 && (
              <Box sx={{ p: 3 }}>
             <Grid
                container
                xs={12}
                direction="row"
                columnGap={5}
                alignItems="center"
                justifyContent="space-around"
                rowSpacing={3}
              >
                {Big.map((item) => (
                  <Grid item xs={12} md={4} lg={3} key={item.id}>
                    <img className="vf-img" src={item.img} alt="1" />
                  </Grid>
                ))}
              </Grid>
              </Box>
            )}
          </React.Fragment>
        </div>
      </Container>
    </div>
  );
};

export default VehicleFleet;
