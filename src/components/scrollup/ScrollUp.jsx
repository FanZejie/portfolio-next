'use client'
import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      // 当页面滚动超过560px时，显示scroll-up按钮
      if (window.scrollY >= 560) {
        scrollUp?.classList.add("show-scroll");
      } else {
        scrollUp?.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 清除事件监听器，防止内存泄漏
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空依赖数组，确保只在组件挂载和卸载时运行
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
