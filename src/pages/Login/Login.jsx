import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useState } from "react";
import Style from "./Login.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { getUsers } from "../../utils/localstorage";
export default function Login(){
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const localdata = getUsers();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (details.email === "" && details.password === "") {
      setError("Enter your email and password");
      return;
    } else if (details.email === "" && details.password !== "") {
      setError("Enter your email first");
      return;
    } else if (details.email !== "" && details.password === "") {
      setError("Enter your password first");
      return;
    }

    if (localdata.find(obj=>obj.email === details.email && obj.password === details.password)){
      navigate("/home");
    } else if(localdata.find(obj=>obj.email !== details.email && obj.password === details.password)){
      setError("Invalid User!!!");
    } else if(localdata.find(obj=>obj.email === details.email && obj.password !== details.password)){
      setError("Wrong password!!!");
    }
  }
  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            height: "80%",
            padding: "0rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            minWidth: "40%",
            position: "relative",
          },
        }}
      >
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", top: "1rem", left: "1rem" }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </DialogActions>
        <DialogContent>
          <form className={Style.root}>
            <TwitterIcon
              sx={{ color: `#42a5f5`, fontSize: "2rem", alignSelf: "center" }}
            />
            <Typography
              variant="h4"
              sx={{ alignSelf: "center", fontWeight: "bold" }}
            >
              Sign in to Twitter
            </Typography>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "5rem",
                alignSelf: "center",
                textTransform: "none",
              }}
              variant="outlined"
            >
              <FcGoogle size={20} />
              &nbsp;Sign in with Google
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "5rem",
                alignSelf: "center",
                textTransform: "none",
              }}
              variant="outlined"
            >
              <ImAppleinc size={20} />
              &nbsp;Sign in with Apple
            </Button>
            <TextField
              id="outlined-basic"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button
              type="submit"
              variant="contained"
              className={Style.submit}
              onClick={handleSubmit}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              variant="outlined"
              className={Style.submit}
              onClick={(e) => {
                e.preventDefault();
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Forgot password
            </Button>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              Don't have an account?{" "}
              <Link to={"/register"} underline="none">
                Sign up
              </Link>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
