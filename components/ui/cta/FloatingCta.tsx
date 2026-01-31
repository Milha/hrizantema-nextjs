import React, { useState, useEffect } from "react";

import classes from "./FloatingCta.module.scss";
import PhoneFixIcon from "../../icons/PhoneFixIcon";
import MailBoxIcon from "../../icons/MailBoxIcon";

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
          <a href="tel:+381692050441">
            <PhoneFixIcon /> +381 69 20 50 441
          </a>
          <a href="mailto:sztrhrizantema@gmail.com">
            <MailBoxIcon /> sztrhrizantema@gmail.com
          </a>
          <button className={classes.ctaButton} onClick={() => setOpen(false)}>
            Zatvorite
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCta;
