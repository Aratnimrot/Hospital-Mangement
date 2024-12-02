// import React from "react";
// import { Link } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome
// import { Navbar, Nav, Container } from "react-bootstrap"; // Import Bootstrap components

// function CustomNavbar() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand href="/">Hospital Management System</Navbar.Brand>

//         {/* Toggle Button for Mobile View */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Navbar Links */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Item>
//               <Link to="/user/UserLogin" className="nav-link">
//                 <i className="fas fa-user me-2"></i> User
//               </Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Link to="/user/Register" className="nav-link">
//                 <i className="fas fa-user-plus me-2"></i> Register
//               </Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Link to="/admin/Adminlogin" className="nav-link">
//                 <i className="fas fa-user-shield me-2"></i> Admin
//               </Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap"; // Import Bootstrap components
// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

// function CustomNavbar() {
//   return (
//     <Navbar bg="green" variant="black" expand="lg" fixed="top">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand href="/">Hospital Management System</Navbar.Brand>

//         {/* Toggle Button for Mobile View */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Navbar Links */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             {/* User Link */}
//             <Nav.Item>
//               <Link to="/user/user-login" className="nav-link">
//                 <i className="bi bi-person me-2"></i> User{" "}
//                 {/* Bootstrap Icon */}
//               </Link>
//             </Nav.Item>

//             {/* Register Link */}
//             <Nav.Item>
//               <Link to="/user/register" className="nav-link">
//                 <i className="bi bi-person-plus me-2"></i> UserRegister{" "}
//                 {/* Bootstrap Icon */}
//               </Link>
//             </Nav.Item>

//             {/* Admin Link */}
//             <Nav.Item>
//               <Link to="/admin/admin-login" className="nav-link">
//                 <i className="bi bi-shield-lock me-2"></i> Admin{" "}
//                 {/* Bootstrap Icon */}
//               </Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from "@mui/material"; // Import Material UI components
import {
  Menu as MenuIcon,
  AccountCircle,
  PersonAdd,
  Lock,
} from "@mui/icons-material"; // Material UI Icons

function CustomNavbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#388E3C" }}>
      {" "}
      {/* Green background */}
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 20 }}>
          Hospital Management System
        </Typography>

        {/* Navbar Links */}
        <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* User Link */}
          <Button
            component={Link}
            to="/user/user-login"
            sx={{
              color: "white",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccountCircle sx={{ mr: 1 }} /> User Login
          </Button>

          {/* Register Link */}
          <Button
            component={Link}
            to="/user/register"
            sx={{
              color: "white",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              ml: 2, // margin-left to separate the buttons
            }}
          >
            <PersonAdd sx={{ mr: 1 }} /> User Register
          </Button>

          {/* Admin Link */}
          <Button
            component={Link}
            to="/admin/admin-login"
            sx={{
              color: "white",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              ml: 2,
            }}
          >
            <Lock sx={{ mr: 1 }} /> Admin Login
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default CustomNavbar;
