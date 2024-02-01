import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import Slideshow from "../../../components/elements/slideshow/Slideshow";
import Feature from "../../../components/elements/feature/Feature";

const Portfolio = () => {
  const galleries = [
    {
      title: "ShotStories",
      images: ["/images/portfolio/shotstories/1.png", "/images/portfolio/shotstories/2.png", "/images/portfolio/shotstories/3.png", "/images/portfolio/shotstories/4.png", "/images/portfolio/shotstories/5.png", "/images/portfolio/shotstories/6.png"],
    },
    {
      title: "QTR",
      images: ["/images/portfolio/qtr/1.png", "/images/portfolio/qtr/2.png"],
    },
    {
      title: "Dimaag",
      images: ["/images/portfolio/dimaag/1.png"],
    },
  ];

  return (
    <div>
      <SectionHeader title="We build things with a finesse you won't get in other agencies." description="" />

      <video autoPlay loop muted style={{ width: "100%" }} className="mb-5">
        <source src="/images/portfolio/shotstories/communitymobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Slideshow images={galleries[0].images} className="mb-5" />

      {/* <video autoPlay loop muted style={{ width: "100%" }} className="mb-5">
        <source src="/images/portfolio/qtr/weekview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <video autoPlay loop muted style={{ width: "100%" }} className="mb-5">
        <source src="/images/portfolio/dimaag/dimaag.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Slideshow images={galleries[1].images} className="mb-5" />
    </div>
  );
};

export default Portfolio;
