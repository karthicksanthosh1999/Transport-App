import { Facebook, Google, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const NavbarTop = () => {
  return (
    <div>
      <div>
        <Box>
          <Grid container>
            <Grid item>
              <Typography variant="body1">
                Transport ltd. inc. 300 Pennsylvania Ave NW
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <WhatsApp />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Google />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default NavbarTop;
