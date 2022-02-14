import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import CustomAnswer from "../src/components/answers/custom-answer";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Result: NextPage = () => {
  const [result, setResult] = useState([]);

  const query = useRouter()?.query;

  useEffect(() => {
    if (!result?.length) {
      const id = query?.id || "";
      setResult(JSON.parse(localStorage.getItem(`${id}`) as string));
    }
  });

  return (
    <React.Fragment>
      <p>Resultado para el test</p>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {result
          ?
          result?.map((res, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>{res.question} {res.answer ? "Sí" : "No"}</Item>
            </Grid>
          ))
          : `No se encontraron resultados para el ID: ${query?.id}`}
      </Grid>
    </React.Fragment>
  );
};

export default Result;
