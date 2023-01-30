import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

// Images
import HeroImage from "../../assets/images/image-hero-desktop.png";
import Audiophile from "../../assets/svgs/client-audiophile.svg";
import Databiz from "../../assets/svgs/client-databiz.svg";
import Maker from "../../assets/svgs/client-maker.svg";
import Meet from "../../assets/svgs/client-meet.svg";

// Utils
import { Colors } from "../utils/constants";

const Hero = () => {
  return (
    <Stack sx={{ py: 3 }}>
      <Stack sx={{ mx: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack sx={{ p: "80px" }}>
              <Typography
                variant="h1"
                color={Colors.black}
                sx={{ fontWeight: "bold" }}
              >
                Make remote work
              </Typography>
              <Typography
                variant="subtitle1"
                color={Colors.mediumGrey}
                sx={{ mt: 1, mb: 1 }}
              >
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </Typography>
              <Stack alignItems="flex-start" sx={{ mt: 1, mb: 1 }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: Colors.white,
                    bgcolor: Colors.black,
                    borderColor: Colors.black,
                    borderRadius: 3,
                    padding: "10px",
                    width: "150px",
                    fontWeight: "bold",
                  }}
                >
                  Learn More
                </Button>
              </Stack>
              <Stack direction="row" spacing={5} sx={{ mt: 10 }}>
                <CardMedia
                  component="img"
                  image={Databiz}
                  alt="audiophile"
                  sx={{ height: "100%", width: "100%" }}
                />
                <CardMedia
                  component="img"
                  image={Audiophile}
                  alt="audiophile"
                  sx={{ height: "100%", width: "100%" }}
                />
                <CardMedia
                  component="img"
                  image={Meet}
                  alt="audiophile"
                  sx={{ height: "100%", width: "100%" }}
                />
                <CardMedia
                  component="img"
                  image={Maker}
                  alt="audiophile"
                  sx={{ height: "100%", width: "100%" }}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack sx={{ p: "70px", pt: 0 }}>
              <CardMedia
                component="img"
                image={HeroImage}
                alt="hero"
                sx={{
                  height: "700px",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Hero;
