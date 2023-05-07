import { BiDotsHorizontalRounded } from "react-icons/bi";
import style from "./WhatsHappenning.module.css";
import { useState } from "react";

const Tweets = [
  {
    topics: "Sports · Trending",
    hashTag: "Harry Brook",
    tweetsNo: "60.9K Tweets",
  },
  {
    topics: "Entertainment · Trending",
    hashTag: "#AK62",
    tweetsNo: "59.4K Tweets",
  },
  {
    topics: "Politics · Trending",
    hashTag: "#KejriwalStand",
    tweetsNo: "1,681 Tweets",
  },
  {
    topics: "Trending in India",
    hashTag: "#AdipurushTrailer",
    tweetsNo: "Trending with #Prabhas",
  },
  {
    topics: "NBA . Earlier today",
    hashTag: "Grizzlies at Lakers",
    tweetsNo: "3,123 Tweets",
  },
];

export default function Whatshappening() {
  const [show, setshow] = useState(false)

  function handleclick(){
    setshow((shows)=>!shows)
  }
  return (
    <div className={style.MainDiv}>
      <p className={style.heading}>What's happening</p>
      {Tweets.map((ele) => (
        <div className={style.Div} key={ele.hashTag}>
          <div>
            <p className={style.para1}>{ele.topics}</p>
            <h4 style={{ fontWeight: "800" }}>{ele.hashTag}</h4>
            <p className={style.para1}>{ele.tweetsNo}</p>
          </div>
          <BiDotsHorizontalRounded className={style.icon} />
        </div>
      ))}
      {Tweets.length > 2 && (
        <a href="#xx" onClick={handleclick} className="btn_show">
          {show ? "Show Less" : "Show More"}
        </a>
      )}
      {/* <button className={style.button} onClick={handleclick}>Show more</button> */}
    </div>
  );
}
