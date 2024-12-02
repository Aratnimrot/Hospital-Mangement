import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItemIcon, Divider } from "@mui/material";
import {
  Home,
  Dashboard,
  Search, // Icon for Search Records
  HealthAndSafety, // Icon for Surgical Information
  ManageAccounts, // Icon for Manage Doctors
  PersonAddAlt, // Icon for Manage Patient Details
  PersonSearch, // Icon for View Doctor Details
  Schedule, // Icon for Post Operation Schedule Details
} from "@mui/icons-material"; // MUI Icons
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#1976d2",
            color: "#fff",
            paddingTop: "16px",
            borderRight: "none",
          },
        }}
      >
        <div className="sidebar-header">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Menu
          </Typography>
        </div>
        <List>
          <Divider style={{ backgroundColor: "white" }} />
          <ListItem
            button
            component={Link}
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" style={{ color: "white" }} />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "white" }} />
          </ListItem>
          {/* Surgical Information */}
          <ListItem
            button
            component={Link}
            to="/user/surgical-information"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <HealthAndSafety />
            </ListItemIcon>
            <ListItemText
              primary="Surgical Information"
              style={{ color: "white" }}
            />
          </ListItem>

          {/* Manage Doctors */}
          <ListItem
            button
            component={Link}
            to="/admin/manage-doctors"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <ManageAccounts />
            </ListItemIcon>
            <ListItemText primary="Manage Doctors" style={{ color: "white" }} />
          </ListItem>

          {/* Manage Patient Details */}
          <ListItem
            button
            component={Link}
            to="/admin/manage-patients"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <PersonAddAlt />
            </ListItemIcon>
            <ListItemText
              primary="Manage Patient Details"
              style={{ color: "white" }}
            />
          </ListItem>

          {/* Post Operation Schedule Details */}
          <ListItem
            button
            component={Link}
            to="/admin/post-operation-schedule"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Schedule />
            </ListItemIcon>
            <ListItemText
              primary="Post Operation Schedule Details"
              style={{ color: "white" }}
            />
          </ListItem>

          <Divider style={{ backgroundColor: "white" }} />

          {/* View Doctor Details */}
          <ListItem
            button
            component={Link}
            to="/user/doctors-details"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <PersonSearch />
            </ListItemIcon>
            <ListItemText
              primary="View Doctor Details"
              style={{ color: "white" }}
            />
          </ListItem>

          {/* Search Records */}
          <ListItem
            button
            component={Link}
            to="/search-records"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search Records" style={{ color: "white" }} />
          </ListItem>
        </List>
      </Drawer>

      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`} />

      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          top: "16px",
          left: "16px",
          backgroundColor: "#1976d2",
          borderRadius: "50%",
          zIndex: 1300, // Ensure button is on top of the sidebar
        }}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default Sidebar;
