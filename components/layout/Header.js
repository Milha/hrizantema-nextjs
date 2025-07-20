import Link from "next/link";
import { useState } from "react";

import BurgerIcon from "../icons/BurgerIcon";
import CloseIcon from "../icons/CloseIcon";

import classes from "./Header.module.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className={classes.header}>
      {/* HEADER LOGO */}
      <Link href="/" passHref>
        <h1>Hrizantema</h1>
      </Link>

      <button
        className={classes.btn}
        onClick={openMenu}
        type="button"
        role="button"
      >
        {!isOpen ? (
          <span className={classes.burger_icon}>
            <CloseIcon></CloseIcon>
          </span>
        ) : (
          <span className={classes.burger_icon}>
            <BurgerIcon></BurgerIcon>
          </span>
        )}
      </button>
    </div>
  );
}

export default Header;
