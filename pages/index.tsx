import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomCardTest from "../src/components/common/custom-card-test";

const Home: NextPage = () => (
  <React.Fragment>
    <Container maxWidth="sm">
      <Box sx={{ minWidth: 275 }}>
        <Grid style={{ padding: 16 }} wrap={"nowrap"} container spacing={4}>
          <Grid item>
            <CustomCardTest
              color="#37474F"
              brand={"Test de Eysenck"}
              date={"13.02.2022"}
              label={"Empezar"}
              cover={"/test-amico.jpg"}
              logo={
                "https://codeanding.com/wp-content/uploads/2021/03/icon_v2.ico"
              }
              title={
                <>
                  Test de Personalidad de Eysenck
                  <br />
                  Formato B
                </>
              }
              page={"eysenck"}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  </React.Fragment>
);

export default Home;
