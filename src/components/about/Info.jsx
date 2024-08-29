import React from "react";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>

      {/* <div className="about__box pointer" onClick={()=>{
        window.open("https://www.credly.com/badges/17bf0ce9-7921-4620-9b24-b939364c0e9b/public_url", "_blank")}}>
        <Image src="/aws.png" alt="aws"  width={25} height={25} />
        <h3 className="about__title">AWS</h3>
        <span className="about__subtitle">DVA-C02</span>
      </div> */}
      <Link className="about__box pointer" href="https://www.credly.com/badges/17bf0ce9-7921-4620-9b24-b939364c0e9b/public_url" target="_blank">
      <Image src="/aws.png" alt="aws"  width={25} height={25} />
        <h3 className="about__title">AWS</h3>
        <span className="about__subtitle">DVA-C02</span>
      </Link>
    </div>
  );
};

export default Info;
