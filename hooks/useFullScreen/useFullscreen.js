import { useEffect, useRef, useState } from "react";
import "./styles.css";

export const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    callback(false);
  };
  return { element, triggerFull, exitFull };
};

