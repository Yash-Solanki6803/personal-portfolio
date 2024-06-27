"use client";
import { useEffect, useState } from "react";

const ToggleFullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      className=" text-light rounded-md shadow-lg md:hidden"
    >
      {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
    </button>
  );
};

export default ToggleFullScreen;
