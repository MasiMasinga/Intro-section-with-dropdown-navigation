import React, { useState } from "react";

// Mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Mui Icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AlarmIcon from "@mui/icons-material/Alarm";

// Images
import Logo from "../../assets/svgs/logo.svg";

// Utils
import { Colors } from "../utils/constants";

const Navbar = () => {
  const [featuresMenu, setFeaturesMenu] = useState(null);
  const [companyMenu, setCompanyMenu] = useState(null);

  const openFeatures = Boolean(featuresMenu);
  const openCompany = Boolean(companyMenu);

  const handleClick = (event) => {
    setFeaturesMenu(event.currentTarget);
  };

  const handleCompanyClick = (event) => {
    setCompanyMenu(event.currentTarget);
  };

  const handleClose = () => {
    setFeaturesMenu(null);
  };

  const handleCloseCompanyClick = () => {
    setCompanyMenu(null);
  };

  return (
    <Stack sx={{ mt: 1 }}>
      <Stack sx={{ mx: 10 }}>
        <Stack justifyContent="space-between" direction="row">
          <Stack justifyContent="center" direction="row" spacing={5}>
            <CardMedia
              component="img"
              image={Logo}
              alt="logo"
              sx={{ cursor: "pointer", width: "120px" }}
            />
            <Stack direction="row" justifyContent="space-around" spacing={3}>
              <Button
                disableFocusRipple
                endIcon={<KeyboardArrowUpIcon />}
                onClick={handleClick}
                sx={{
                  textTransform: "none",
                  color: Colors.mediumGrey,
                  ":hover": {
                    color: Colors.black,
                  },
                }}
              >
                Features
              </Button>
              <Menu
                anchorEl={featuresMenu}
                open={openFeatures}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    justifyContent: "space-evenly",
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  <ListAltIcon sx={{ color: Colors.blue }} />
                  Todo List
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    justifyContent: "space-evenly",
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  <CalendarMonthIcon sx={{ color: Colors.skyBlue }} />
                  Calendar
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    justifyContent: "space-evenly",
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  <NotificationsIcon sx={{ color: Colors.yellow }} />
                  Reminders
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    justifyContent: "space-evenly",
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  <AlarmIcon sx={{ color: Colors.purple }} />
                  Planning
                </MenuItem>
              </Menu>
              <Button
                disableFocusRipple
                endIcon={<KeyboardArrowUpIcon />}
                onClick={handleCompanyClick}
                sx={{
                  textTransform: "none",
                  color: Colors.mediumGrey,
                  ":hover": {
                    color: Colors.black,
                  },
                }}
              >
                Company
              </Button>
              <Menu
                anchorEl={companyMenu}
                open={openCompany}
                onClose={handleCloseCompanyClick}
              >
                <MenuItem
                  onClick={handleCloseCompanyClick}
                  sx={{
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  History
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCompanyClick}
                  sx={{
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  Our Team
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCompanyClick}
                  sx={{
                    color: Colors.mediumGrey,
                    ":hover": {
                      color: Colors.black,
                    },
                  }}
                >
                  Blog
                </MenuItem>
              </Menu>
              <Button
                disableFocusRipple
                sx={{
                  textTransform: "none",
                  color: Colors.mediumGrey,
                  ":hover": {
                    color: Colors.black,
                  },
                }}
              >
                Careers
              </Button>
              <Button
                disableFocusRipple
                sx={{
                  textTransform: "none",
                  color: Colors.mediumGrey,
                  ":hover": {
                    color: Colors.black,
                  },
                }}
              >
                About
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                borderColor: "black",
                borderRadius: 3,
                textTransform: "none",
                fontWeight: "normal",
                ":hover": {
                  borderColor: Colors.black,
                },
              }}
            >
              Register
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
