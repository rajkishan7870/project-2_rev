import React from 'react'
import Style from './FeedCard.module.css'
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { FaRetweet } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import imgs from "../../utils/profile.png";


export default function FeedCard({tweet}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };


    
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "fit-content",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-evenly",
        "&:hover": {
          backgroundColor: "rgb(180, 178, 178, 0.2)",
        },
      }}
    >
      <div style={{ boxSizing: "border-box", padding: "0.2rem" }}>
        <Avatar alt={tweet.tweetedBy.name} src={imgs} />
      </div>
      <div
        style={{
          boxSizing: "border-box",
          padding: "0.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: "0.5rem",
        }}
      >
        <div>
          <strong>{tweet.tweetedBy.name}</strong>
          &nbsp;
          <span>@{tweet.tweetedBy.name}</span>
        </div>
        <div>{tweet.content} </div>
        <div>
          <img
            src={tweet.image}
            style={{ objectFit: "contain", width: "90%", borderRadius: "1rem" }}
            alt=""
          />
        </div>
        <div className={Style.tweetIcons}>
          <span onClick={handleClickOpen}>
            <ChatBubbleOutlineIcon />
            &nbsp;<span>{tweet.commentCount}</span>
          </span>
          <span>
            <FaRetweet size={30} />
            &nbsp;<span>{tweet.reTweetCount}</span>
          </span>
          <span>
            {tweet.isLiked ? (
              <AiFillHeart size={25} fill="#e91e63" />
            ) : (
              <FavoriteBorderIcon />
            )}
            &nbsp;<span>{tweet.likeCount}</span>
          </span>
          <span>
            <ViewKanbanIcon />
          </span>
          <span>
            <FiShare size={25} />
          </span>
        </div>
      </div>
    </Box>
  )
}
