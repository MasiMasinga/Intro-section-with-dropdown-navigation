import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

// Images
import Logo from "../../assets/svgs/logo.svg";

// Utils
import { Colors } from "../utils/constants";

const Navbar = () => {
  return (
    <Stack sx={{ mt: 2 }}>
      <Stack sx={{ mx: 10 }}>
        <Stack justifyContent="space-between" direction="row">
          <Stack justifyContent="center" direction="row" spacing={5}>
            <CardMedia
              component="img"
              image={Logo}
              alt="logo"
              sx={{ cursor: "pointer" }}
            />
            <Stack direction="row" justifyContent="space-around" spacing={5}>
              <Link underline="none">
                <Typography
                  variant="subtitle1"
                  color={Colors.black}
                  sx={{ cursor: "pointer" }}
                >
                  Features
                </Typography>
              </Link>
              <Link underline="none">
                <Typography
                  variant="subtitle1"
                  color={Colors.black}
                  sx={{ cursor: "pointer" }}
                >
                  Company
                </Typography>
              </Link>
              <Link underline="none">
                <Typography
                  variant="subtitle1"
                  color={Colors.black}
                  sx={{ cursor: "pointer" }}
                >
                  Careers
                </Typography>
              </Link>
              <Link underline="none">
                <Typography
                  variant="subtitle1"
                  color={Colors.black}
                  sx={{ cursor: "pointer" }}
                >
                  About
                </Typography>
              </Link>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                color: "black",
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
