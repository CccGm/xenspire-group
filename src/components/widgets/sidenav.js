import React from "react";
import {
  IconButton,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { LogoutOutlined, Search } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/images/app-logo.png";
import avtar from "../../assets/images/Avatar.png";
import home from "../../assets/images/home-icon.png";
import profile from "../../assets/images/profile-icon.png";
import time from "../../assets/images/timesheets-icon.png";
import { useNavigate } from "react-router-dom";

export const SideNav = ({ setUser, email }) => {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const name = [
    { name: "Home", icon: home, path: "/home" },
    { name: "Timesheets", icon: time, path: "/dashboard" },
  ];
  const profile_name = [
    { name: "Documents", path: "/" },
    { name: "Benifits", path: "/" },
    { name: "Payroll", path: "/" },
    { name: "Profile Details", path: "/profile" },
  ];

  return (
    <aside className="fixed w-72 h-screen bg-app-gray grid content-around overflow-scroll">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-fit px-10" />
      </div>
      <div>
        <div className="mx-2">
          {name.map((data, index) => (
            <ListItemButton
              key={index}
              sx={{
                justifyContent: "center",
                px: 2.5,
                backgroundColor: "#53783B",
                margin: 1,
                borderRadius: 2,
              }}
              onClick={() => navigation(data.path)}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: "auto",
                  justifyContent: "center",
                }}>
                <img src={data.icon} alt="logo" />
              </ListItemIcon>
              <ListItemText
                primary={data.name}
                sx={{ ml: 1, color: "#ffffff" }}
              />
            </ListItemButton>
          ))}
          <Accordion
            expanded={expanded === "Settings"}
            onChange={handleChange("Settings")}
            sx={{ backgroundColor: "#53783B", mt: 2, mx: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={profile} alt="icon" className="w-5" />
              </Typography>
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
        </div>
      </div>
      <div className="mx-6 border-t-2 border-app-cycle mb-10">
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
    </aside>
  );
};
