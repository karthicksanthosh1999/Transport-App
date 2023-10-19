import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import "./scrollbtn.css";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <div className="scroll-btn" style={{ display: visible ? "block" : "none" }}>
        <IconButton
        
          onClick={scrollTop}>
          <ArrowUpward color="#5b07f7" />
        </IconButton>
      </div>
    </div>
  );
};

export default ScrollBtn;
