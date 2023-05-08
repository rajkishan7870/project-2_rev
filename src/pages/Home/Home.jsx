import React from "react";
import Style from "./Home.module.css";
import SideNav from "../Slides/SideNav/SideNav";
import Right from "../Slides/Right/Right";
import Middle from "../Slides/Middle/Middle";


export default function Home(){
  return (

    <div>
    <div className={Style.root}>
      <div className={Style.left}>
        <SideNav />
      </div>
      <div className={Style.middle}>
        <Middle/>
      </div>
      <div className={Style.right}>
       <Right/>
      </div>
    </div>
    </div>
  );
};

