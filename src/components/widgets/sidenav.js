import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
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
import setting from "../../assets/images/setting-icon.png";
import dash from "../../assets/images/dashboard-icon.png";
import time from "../../assets/images/timesheets-icon.png";
import doc from "../../assets/images/document-icon.png";

export const SideNav = ({ setUser, email }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const name = [
    { name: "Home", icon: home },
    { name: "Profile", icon: profile },
    { name: "Documents", icon: doc },
    { name: "Dashboards", icon: dash },
    { name: "Timesheets", icon: time },
    { name: "Settings", icon: setting },
  ];

  return (
    <aside className="fixed w-72 h-screen bg-app-gray grid content-around overflow-scroll">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-fit px-10" />
      </div>
      <div>
        <div className="m-2 rounded-md  bg-app-lightGreen ">
          <TextField
            size="small"
            fullWidth
            placeholder="search"
            style={{ color: "white" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#E9D7FE" }} />
                </InputAdornment>
              ),
            }}
            sx={{ input: { color: "#E9D7FE" }, borderColor: "#7B964A" }}
          />
        </div>

        <div className="mx-2">
          <Accordion
            expanded={expanded === "Home"}
            onChange={handleChange("Home")}
            sx={{ backgroundColor: "#53783B50", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={name[0].icon} alt="icon" className="w-5" />
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {name[0].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {name.map((data, index) => {
                return (
                  <div key={index} className="bg-app-green my-2 p-2 rounded-md">
                    <div className="grid-flow-col grid justify-start">
                      <img src={data.icon} alt="icon" className="w-5" />
                      <text
                        style={{
                          color: "white",
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
          <Accordion
            expanded={expanded === "Profile"}
            onChange={handleChange("Profile")}
            sx={{ backgroundColor: "#53783B50", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={name[1].icon} alt="icon" className="w-5" />
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {name[1].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {name.map((data, index) => {
                return (
                  <div key={index} className="bg-app-green my-2 p-2 rounded-md">
                    <div className="grid-flow-col grid justify-start">
                      <img src={data.icon} alt="icon" className="w-5" />
                      <text
                        style={{
                          color: "white",
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
          <Accordion
            expanded={expanded === "Documents"}
            onChange={handleChange("Documents")}
            sx={{ backgroundColor: "#53783B50", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={name[2].icon} alt="icon" className="w-5" />
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {name[2].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {name.map((data, index) => {
                return (
                  <div key={index} className="bg-app-green my-2 p-2 rounded-md">
                    <div className="grid-flow-col grid justify-start">
                      <img src={data.icon} alt="icon" className="w-5" />
                      <text
                        style={{
                          color: "white",
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
          <Accordion
            expanded={expanded === "Dashboards"}
            onChange={handleChange("Dashboards")}
            sx={{ backgroundColor: "#53783B50", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={name[3].icon} alt="icon" className="w-5" />
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {name[3].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {name.map((data, index) => {
                return (
                  <div key={index} className="bg-app-green my-2 p-2 rounded-md">
                    <div className="grid-flow-col grid justify-start">
                      <img src={data.icon} alt="icon" className="w-5" />
                      <text
                        style={{
                          color: "white",
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
          <Accordion
            expanded={expanded === "Timesheets"}
            onChange={handleChange("Timesheets")}
            sx={{ backgroundColor: "#53783B50", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={name[4].icon} alt="icon" className="w-5" />
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {name[4].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {name.map((data, index) => {
                return (
                  <div key={index} className="bg-app-green my-2 p-2 rounded-md">
                    <div className="grid-flow-col grid justify-start">
                      <img src={data.icon} alt="icon" className="w-5" />
                      <text
                        style={{
                          color: "white",
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
          <Accordion
            expanded={expanded === "Settings"}
            onChange={handleChange("Settings")}
            sx={{ backgroundColor: "#53783B50", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: "18%", flexShrink: 0 }}>
                <img src={name[5].icon} alt="icon" className="w-5" />
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {name[5].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {name.map((data, index) => {
                return (
                  <div key={index} className="bg-app-green my-2 p-2 rounded-md">
                    <div className="grid-flow-col grid justify-start">
                      <img src={data.icon} alt="icon" className="w-5" />
                      <text
                        style={{
                          color: "white",
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
