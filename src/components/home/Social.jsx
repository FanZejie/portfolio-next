import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/zjayfan/?locale=en_US"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      {/* <a
        href="https://dribbble.com/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-dribbble"></i>
      </a> */}

      <a
        href="https://github.com/FanZejie"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
