import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <video
        className={styles.video}
        muted
        loop
        autoPlay
        playsInline
      >
        <source
          src="https://cervo-seven.vercel.app/video.mp4"
          type="video/mp4"
        />
      </video>
    </header>
  );
};

export default Header;
