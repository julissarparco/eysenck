import React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Color from "color";
import { styled } from "@mui/material/styles";
import RowFlex from "../flex/row-flex";
import ItemFlex from "../flex/item-flex";
import Button from "@mui/material/Button";
import Router from "next/router";

type CustomCardTestProps = {
  color?: string;
  cover: string;
  logo: string;
  title: React.ReactNode;
  brand: string;
  date: string;
  label: string;
  page: string;
};

const defaultColor = "#747f84";

const StyledRoot = styled("div")<{ color?: string }>(({ color }) => ({
  position: "relative",
  borderRadius: "1rem",
  minWidth: 320,
  paddingTop: 160,
  "&:before": {
    transition: "0.2s",
    position: "absolute",
    width: "100%",
    height: "100%",
    content: '""',
    display: "block",
    borderRadius: "1rem",
    zIndex: 0,
    bottom: 0,
    backgroundColor: Color(color).darken(0.3).desaturate(0.2).string(),
  },
  "&:hover": {
    "&:before": {
      bottom: -6,
    },
    "& .MuiAvatar-root": {
      transform: "scale(1.1)",
      boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
    },
  },
}));

const CardMediaCover = styled(CardMedia)(() => ({
  borderRadius: "1rem",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
}));

const StyledH2 = styled("h2")(() => ({
  fontSize: "1.25rem",
  color: "#fff",
  margin: 0,
}));

const StyledContent = styled("div")<{ color?: string }>(
  ({ color = defaultColor }) => ({
    position: "relative",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 1,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "16px 16px 0px 0px",
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.12)})`,
    },
  })
);

const AvatarLogo = styled(Avatar)(() => ({
  transition: "0.3s",
  width: 100,
  height: 100,
  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
  borderRadius: "1rem",
}));

const StyledDivTeam = styled("div")(({ theme }) => ({
  fontSize: "0.75rem",
  color: "rgba(255 255 255 / 80%)",
}));

const StyledDivDate = styled("div")(({ theme }) => ({
  fontFamily: "Sen",
  color: "#fff",
  backgroundColor: theme.palette.text.disabled,
  opacity: 0.72,
  fontSize: "0.75rem",
  padding: "0 0.5rem",
  borderRadius: 12,
}));

const StyledAction = styled(CardActions)<{ color?: string }>(
  ({ color = defaultColor }) => ({
    position: "relative",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 1,
      zIndex: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0px 0px 16px 16px",
      background: `${color}`,
    },
  })
);

const CustomCardTest = ({
  color,
  cover,
  logo,
  title,
  brand,
  date,
  label,
  page,
}: CustomCardTestProps) => {
  return (
    <StyledRoot color={color}>
      <CardMediaCover image={cover} />
      <StyledContent color={color}>
        <Box position={"relative"} zIndex={1}>
          <RowFlex p={0} gap={2}>
            <ItemFlex>
              <AvatarLogo src={logo} />
            </ItemFlex>
            <ItemFlex alignSelf="flex-end">
              <StyledH2>{title}</StyledH2>
            </ItemFlex>
          </RowFlex>
          <RowFlex mt={4} alignItems={"center"}>
            <ItemFlex>
              <StyledDivTeam>{brand}</StyledDivTeam>
            </ItemFlex>
            <ItemFlex ml="auto">
              <StyledDivDate>{date}</StyledDivDate>
            </ItemFlex>
          </RowFlex>
        </Box>
      </StyledContent>
      <StyledAction
        color={color}
        className="d-flex justify-content-center align-items-center"
      >
        <Button
          className="btn-custom"
          onClick={() => {
            Router.push(page);
          }}
        >
          {label}
        </Button>
      </StyledAction>
    </StyledRoot>
  );
};

export default CustomCardTest;
