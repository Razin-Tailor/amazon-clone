import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className=" home__carouselImage"
                src="/imgs/3000x1200_Hero-Tall_NP._CB661598783_.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/3000x1200---PC---Watches-4._CB659587526_.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/D20658975_WLD_Redmi_9A_BAU_Tallhero_3000x1200._CB659656362_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/gaming_3000x1200._CB431281466_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/MI_Gw_3000x1200._CB659658858_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/PC_Hero_3000x1200_Plain._CB659783464_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/Super-saver-3000x1200-EOSS-1._CB411551980_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className=" home__carouselImage"
                src="/imgs/DesktopHero_HFC_3000x1200_Recharge1._CB414105779_.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
