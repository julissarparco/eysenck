import React from "react";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomQuestion from "../src/components/questions/custom-question";

const EysenckTest: NextPage = () => (
  <React.Fragment>
    <Container maxWidth={"md"}>
        <CustomQuestion />
    </Container>
  </React.Fragment>
);

export default EysenckTest;
