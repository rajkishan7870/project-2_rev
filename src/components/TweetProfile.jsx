import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PublicIcon from "@mui/icons-material/Public";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Style from "./TweetProfile.module.css";
import imgs from '../utils/profile.png'
import { useSetRecoilState } from "recoil";
import { tweetsAtom } from "../Recoil/tweets";
export const TweetProfile = () => {
  const[value,setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const setTweets = useSetRecoilState(tweetsAtom);
  const [tweet, setTweet] = React.useState({
    id: Date.now(),
    content:
      "Aspernatur accusamus porro perspiciatis occaecati assumenda modi. Eaque nesciunt quisquam quidem enim rem. Ab corrupti atque vero quos sed facilis odit nemo voluptas. Illo distinctio dolore accusantium. Sequi deserunt qui debitis explicabo. Ipsa atque suscipit repudiandae velit architecto.",
    createdAt: "2022-09-10T07:47:45.804Z",
    image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    tweetedBy: {
      id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
      name: "Verna Pouros",
    },
    likeCount: 563,
    commentCount: 504,
    reTweetsCount: 63,
    isLiked: false,
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTweet = (event) => {
    event.preventDefault();
    setTweets((tweets) => {
      return [tweet, ...tweets];
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value)
    setTweet({
      ...tweet,
      [event.target.name]: event.target.value,
      image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "fit-content",
      }}
    >
      <div className={Style.first}>
        <Avatar
          alt="Remy Sharp"
          src={imgs}
          sx={{ width: 56, height: 56, bgcolor: "blue" }}
        >
        </Avatar>
      </div>
      <div className={Style.second}>
        <div>
          <div>
            <Button
              variant="outlined"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                textTransform: "none",
                borderRadius: "1rem",
                padding: " 0rem 0.2rem 0rem 0.2rem",
              }}
            >
              Everyone <ExpandMoreIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Everyone</MenuItem>
              <MenuItem onClick={handleClose}>Twitter Circle</MenuItem>
            </Menu>
          </div>
        </div>
        <div>
          <TextField
            sx={{
              "& fieldset": { border: "none" },
              maxHeight: "fit-content",
              width: "80%",
            }}
            InputProps={{
              style: {
                color: "black",
                fontWeight: "bold",
              },
            }}
            focused={false}
            placeholder="What’s happening?"
            type="text"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            size="small"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            variant="text"
            sx={{ borderRadius: "1rem", textTransform: "none" }}
          >
            <PublicIcon sx={{ color: "#42a5f5" }} />
            Everyone can reply
          </Button>
        </div>
        <hr style={{ width: "100%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              display: "flex",
              gap: "0.5rem",
              boxSizing: "border-box",
              padding: "0.5rem",
            }}
          >
            <span>
              <CropOriginalIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <GifBoxIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <PollIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <SentimentSatisfiedAltIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <EditCalendarIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <LocationOnIcon sx={{ color: "#42a5f5" }} />
            </span>
          </div>
          <div>
            <Button
            onClick={handleTweet}
              variant="contained"
              sx={{
                borderRadius: "2rem",
                textTransform: "none",
                fontSize: "1rem",
                padding: "0.2rem 1.2rem 0.2rem 1.2rem",
              }}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};
