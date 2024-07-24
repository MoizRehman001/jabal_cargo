import React from "react";
import DrawerAppBar from "../Components/AppBar";
import sample from "./background_video.mp4";
import ReactPlayer from "react-player";
import "./home.css";
import logo from "../images/logo.png";
import whatsapplogo from "../images/whatsapp.svg"

const Home = () => {
  return (
    <div
      style={{ position: "fixed", top: "12%", height: "88%", width: "100%" }}
    >
      {/* <video autoPlay muted loop id="myVideo">
          <source src={"https://www.youtube.com/watch?v=q5UWVgxt3gk"} type="video/mp4" ></source>
          video splas
        </video> */}
      <ReactPlayer className="react-player" url={sample} loop playing muted />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#EFA71C",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div class="background">
          <div class="card">
            <img
              src={logo}
              alt="image"
              style={{ width: "90%", height: "70%" }}
            />
            <div style={{ lineHeight: "0.6" }}>
              <h1
                style={{
                  textWrap: "balance",
                  wordWrap: "break-word",
                  color: "rgb(239, 167, 28)",
                }}
              >
                Coming Soon....
              </h1>
              <h1>E-Mail : jabalcargo@gmail.com</h1>
              <div className="Chat-now-container" >
                <div class="stage">
                  <div class="box bounce-1">
                    <img src={whatsapplogo} ></img>
                  </div>
                </div>
                <a href="https://wa.me/9810441115" className="whatsAppLink">
                  Chat now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
