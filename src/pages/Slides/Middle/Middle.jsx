import React from 'react'
import {TweetProfile} from '../../../components/TweetProfile'
import Feeds from '../../../components/Feeds/Feeds'
import Style from "./Middle.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Middle() {
  return (
    <div className={Style.root}>
      <BasicTabs title="Home" />
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 0,
            height: "100vh",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs({ title }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "blur(8px)",
          height: "15vh",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginLeft: "1rem" }}
        >
          {title}
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5rem",
            alignItems: "flex-end",
            width: "100%",
          }}
          TabIndicatorProps={{
            style: {
              width: "50px",
              translate: "9.5rem",
              height: "5px",
              borderRadius: "1rem",
            },
          }}
        >
          <Tab
            label="For you"
            {...a11yProps(0)}
            sx={{ textTransform: "none", fontSize: "1rem", width: "50%" }}
          />
          <Tab
            label="Following"
            {...a11yProps(1)}
            sx={{ textTransform: "none", fontSize: "1rem", width: "50%" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TweetProfile />
        <Feeds/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TweetProfile />
        <Feeds/>
      </TabPanel>
    </Box>
  );
}