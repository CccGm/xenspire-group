import React from "react";
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
} from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import avtar from "../../assets/images/Avatar.png";
import home from "../../assets/images/home-icon.png";
import profile from "../../assets/images/profile-icon.png";
import time from "../../assets/images/timesheets-icon.png";

import logo from "../../assets/images/Logo.png";
import Footer from "./footer";

export const SideNav = ({ setUser, email }) => {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const drawerWidth = 250;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    marginBottom: 10,
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const drawer_Data = [
    { name: "Home", icon: home, path: "/home" },
    { name: "Timesheets", icon: time, path: "/dashboard" },
  ];

  const drawer_Data_new = [
    { name: "Home", icon: home, path: "/home" },
    { name: "Timesheets", icon: time, path: "/dashboard" },
    { name: "Profile", icon: profile, path: "/profile" },
  ];

  React.useEffect(() => {
    if (open) {
      setData(drawer_Data);
    } else {
      setData(drawer_Data_new);
    }
  }, [open]);

  const handleDrawer = () => {
    setOpen(!open);
  };
  const profile_name = [
    { name: "Documents", path: "/" },
    { name: "Benifits", path: "/" },
    { name: "Payroll", path: "/" },
    { name: "Profile Details", path: "/profile" },
  ];

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: "#D1D1D1" }}>
          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="h-full bg-app-LightTeal bg-app-gray">
          <List>
            <ListItem
              sx={{
                justifyContent: open ? "initial" : "center",
                p: 2.5,
              }}>
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                }}>
                <img src={logo} alt="logo" width={60} />
              </ListItemIcon>
              <ListItemText
                primary={"Xenspire Group"}
                sx={{ opacity: open ? 1 : 0, color: "#53783B", fontSize: 30 }}
                primaryTypographyProps={{
                  fontSize: "21px",
                  fontWeight: "700",
                }}
              />
            </ListItem>
            {data.map((data, index) => (
              <ListItemButton
                key={index}
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: "#53783B",
                  margin: 1,
                  borderRadius: 2,
                }}
                onClick={() => navigation(data.path)}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <img src={data.icon} alt="logo" />
                </ListItemIcon>
                <ListItemText
                  primary={data.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            ))}
            {open && (
              <Accordion
                expanded={expanded === "profile"}
                onChange={handleChange("profile")}
                sx={{
                  backgroundColor: "#53783B",
                  mt: 2,
                  mx: 1,
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    <img src={profile} alt="logo" />
                  </ListItemIcon>
                  <Typography sx={{ color: "black" }}>Profile</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {profile_name.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-app-llgreen my-2 p-2 rounded-md"
                        onClick={() => navigation(data.path)}>
                        <div className="grid-flow-col grid justify-start">
                          <text
                            style={{
                              color: "black",
                              fontSize: 14,
                              marginLeft: 10,
                            }}>
                            {data.name}
                          </text>
                        </div>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )}
          </List>
        </div>
        {open && (
          <div className="mx-6 border-t-2 border-app-cycle mb-20">
            <div className="grid grid-flow-col mt-3 justify-between">
              <div>
                <img src={avtar} className="w-10" alt="avtar" />
              </div>
              <div className="grid grid-flow-row">
                <text style={{ fontSize: 12 }}>User Name</text>
                <text style={{ fontSize: 12 }}>
                  {email ? email : "User@gmail.com"}
                </text>
              </div>
              <IconButton onClick={() => setUser("")}>
                <LogoutOutlined color="success" />
              </IconButton>
            </div>
          </div>
        )}
        <Footer />
      </Drawer>
    </>
  );
};
