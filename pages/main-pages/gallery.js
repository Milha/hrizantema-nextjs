import { useState, useEffect } from "react";

import { rezanoItemData } from "../../data/rezanoItemData";

import classes from "./gallery.module.scss";

function gallery() {
  const imagesMaped = rezanoItemData.map((el) => el.imageBig);

  // console.log(imagesMaped);

  return (
    <div className={classes.cont}>
      {rezanoItemData.reverse().map((el) => (
        <div key={el.id} className={classes.imgCont}>
          <img src={el.imageBig} className={classes.singleImage} />
        </div>
      ))}
    </div>
  );
}

export default gallery;
