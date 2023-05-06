import React, { useState } from "react";
import Style from "./Register.module.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { getUsers } from "../../utils/localstorage";
export default function Register() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: 0,
    DOB: "",
  });
  function handleClose() {
    setOpen(false);
    navigate("/");
  }

  const users = getUsers();

  function handleSubmit(e) {
    e.preventDefault();
    users.push(details);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  }
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          height: "90%",
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
        <form onSubmit={handleSubmit} className={Style.root}>
          <TwitterIcon
            sx={{ color: `#42a5f5`, fontSize: "2rem", alignSelf: "center" }}
          />
          <Typography
            variant="h4"
            sx={{ alignSelf: "center", fontWeight: "bold" }}
          >
            Sign up to Twitter
          </Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
          <TextField
            label="Phone"
            name="phone"
            type="number"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
          <Typography variant="caption">
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Date of birth
            </Typography>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </Typography>
          <TextField
            name="DOB"
            type="date"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className={Style.submit}
            sx={{
              textTransform: "none",
            }}
          >
            Next
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
