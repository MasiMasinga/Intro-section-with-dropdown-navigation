import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// Components
import Navbar from "./common/components/Navbar";
import Hero from "./common/components/Hero";

// Utils

function App() {
  return (
    <Stack sx={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <Hero />
    </Stack>
  );
}

export default App;
