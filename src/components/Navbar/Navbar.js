import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./navbar.css";
import { Grid, Link, useScrollTrigger } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  WhatsApp,
  Google,
  LinkedIn,
  Twitter,
  FacebookSharp,
  Phone,
} from "@mui/icons-material";
import logo from "../../asserts/Logo.png";

const drawerWidth = 240;

function Navbar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => navigate("/")}
          >
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <div>
        <Box>
          <Grid container className="appheader-box">
            <Grid item>
              <Typography variant="body2">
                Transport ltd. inc. 300 Pennsylvania Ave NW
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className="appheader-icon">
                <FacebookSharp />
              </IconButton>
              <IconButton className="appheader-icon">
                <WhatsApp />
              </IconButton>
              <IconButton className="appheader-icon">
                <Twitter />
              </IconButton>
              <IconButton className="appheader-icon">
                <Google />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <ElevationScroll {...props}>
              <AppBar
                component="nav"
                position="sticky"
                sx={{ top: "0", padding: "5px", backgroundColor: "#1F425D" }}
              >
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Link
                    component="div"
                    onClick={() => navigate("/")}
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    <img src={logo} alt="logo" className="logo" />
                  </Link>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      className="nav-btn"
                      sx={{ color: "#fff" }}
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Button>
                    <Button
                      className="nav-btn"
                      sx={{ color: "#fff" }}
                      onClick={() => navigate("/about")}
                    >
                      About
                    </Button>

                    <div class="dropdown">
                    <Button
                      className="nav-btn dropbtn"
                      sx={{ color: "#fff" }}
                      onClick={() => navigate("/service")}
                    >
                      Services
                    </Button>
                    <div class="dropdown-content">
                      <a href="/transport">Transport</a>
                      <a href="/logistic">Logistic</a>
                      <a href="/passanger">Passenger Transport</a>
                      <a href="/towservices">Tow Services</a>
                      <a href="/vehicleservice">Vehicle Service</a>
                      <a href="/stroage">Storage</a>
                    </div>
                    </div>

                    <Button
                      className="nav-btn"
                      sx={{ color: "#fff" }}
                      onClick={() => navigate("/vehiclefleet")}
                    >
                      Vehicle Fleet
                    </Button>
                    <Button
                      className="nav-btn"
                      sx={{ color: "#fff" }}
                      onClick={() => navigate("/contact")}
                    >
                      Contact
                    </Button>

                    <Button
                      variant="contained"
                      type="submit"
                      onClick={()=>navigate('/')}
                      sx={{
                        bgcolor: "#4D4C7D",
                        height: "50px",
                        maxWidth: "400px",
                        mt: 3,
                        mb: 3,
                        ":hover": { bgcolor: "#363062" },
                      }}
                    >
                      GET A QUOTE
                    </Button>
                  </Box>
                </Toolbar>
              </AppBar>
             
          </ElevationScroll>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
