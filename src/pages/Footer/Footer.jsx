import React from "react";
import Style from "../Footer/Footer.module.css";
import { useNavigate } from "react-router-dom";
// import FormDialog from "../../Components/FormDialog";
import { Box,Typography, Button } from "@mui/material";
export default function Footer(){

  const navigate = useNavigate();

  function handleSignIn(){
      navigate("/login")
  }
  function handleSignUp(){
    navigate("/register")
}
  return (
    <Box
      className={Style.root}
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <div className={Style.text}>
        <Typography variant="h5">Don’t miss what’s happening</Typography>
        <Typography variant="caption" fontSize={15}>People on Twitter are the first to know.</Typography>
      </div>
      <div className={Style.btn}>
        <Button variant="contained"
        sx={{
          color: "white",
          textTransform: "none",
          borderRadius : "2rem"

        }}
        onClick={handleSignIn}
        >Sign In</Button>
        <Button variant="contained"
        sx={{
          color : "white",
          textTransform: "none",
          borderRadius : "2rem",
        }}
        onClick={handleSignUp}
        >SignUp</Button>
      </div>
    </Box>
  );
};

