'use client'
import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data text-right">
              <div>
                <h3 className="qualification__title">Intern Java Developer</h3>
                <span className="qualification__subtitle">
                  Bejing - CSLC
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020/10 - 2021/02
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Java Developer</h3>
                <span className="qualification__subtitle">
                Bejing - CSLC
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021/07-2021/10
                </div>
              </div>
            </div>

            <div className="qualification__data text-right">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                Bejing - CSLC
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021/10 - NOW
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data text-right">
              <div>
                <h3 className="qualification__title">Hainan University</h3>
                <span className="qualification__subtitle">
                Bachelor&apos;s Degree in <br></br>[computer science]
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">AWS Certified Developer - Associate</h3>
                <a href="https://www.credly.com/badges/17bf0ce9-7921-4620-9b24-b939364c0e9b/public_url" target={"_blank"} className="qualification__subtitle" rel="noreferrer">
                  Click show Certification
                </a>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024/05/13
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
