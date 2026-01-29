import React, { useState, useEffect } from "react";

import classes from "./FloatingCta.module.scss";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
        console.log("Teseeeeesting");
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={classes.floatingCtaCont}>
      {visible && !open && (
        <button onClick={() => setOpen(true)} className={classes.ctaButton}>
          Poručite
        </button>
      )}
      {open && visible && (
        <div className={classes.ctaModal}>
          <p>📞 +381 69 20 50 441</p>
          <p>✉️ sztrhrizantema@gmail.com</p>
          <button className={classes.ctaButton} onClick={() => setOpen(false)}>
            Zatvori
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCta;
