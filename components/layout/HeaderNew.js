import Link from "next/link";
import { useState } from "react";

import BurgerIcon from "../icons/BurgerIcon";
import CloseIcon from "../icons/CloseIcon";

import classes from "./HeaderNew.module.scss";

function HeaderNew() {
  const [isOpen, setIsOpen] = useState(true);
  const openMenu = () => setIsOpen(!isOpen);

  const [drop, setDrop] = useState(true);
  const dropMenu = () => setDrop(!drop);

  const doubleClick = () => {
    openMenu();
    dropMenu();
  };

  return (
    <div className={classes.header}>
      {/* HEADER LOGO */}
      <Link href="/" passHref>
        <h1>Hrizantema</h1>
      </Link>

      {/* NAVIGATION */}
      <div className={!isOpen ? classes.nav_toggle : classes.nav_toggle_none}>
        <ul aria-label="menu">
          <li onClick={openMenu}>
            <Link href="/lists/list-ponuda-buketi-korpe">
              <a>Buketi</a>
            </Link>
          </li>
          <li onClick={openMenu}>
            <Link href="/lists/list-ponuda-venci">
              <a>Venci</a>
            </Link>
          </li>

          <li>
            <p className={classes.drop_p} onClick={dropMenu}>
              Suze
            </p>
            <div
              className={drop ? classes.is_drop : classes.is_not_drop}
              onClick={doubleClick}
            >
              <div className={classes.drop_link_cont}>
                <Link href="/lists/list-ponuda-suze">
                  <a>Klasične</a>
                </Link>
                {/* <br /> */}
                <Link href="/lists/list-ponuda-dvostranicne-suze">
                  <a>Dvostranične</a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/lists/lista-ponuda-rezano-cvece">
              <a>Rezano cveće</a>
            </Link>
          </li>
          <li>
            <Link href="/lists/list-ostalo-u-ponudi">
              <a>Ostalo u ponudi</a>
            </Link>
          </li>
          <li>
            <Link href="/main-pages/contact">
              <a className={classes.contact}>Kontakt</a>
            </Link>
          </li>
        </ul>
      </div>

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

export default HeaderNew;
