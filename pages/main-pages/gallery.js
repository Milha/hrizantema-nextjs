import { useState, useEffect } from "react";

import { rezanoItemData } from "../../data/rezanoItemData";
import { buketSetData } from "../../utils/similarsFinder";

import classes from "./gallery.module.scss";

function Gallery({ imagesMaped }) {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(imagesMaped);
    setCollection([
      ...new Set(imagesMaped.map((item) => item.includes.map((el) => el))),
    ]);
  }, [imagesMaped]);

  // console.log(collection.flat());
  const newColl = [...new Set(collection.flat())];

  const imagesRezanoMaped = rezanoItemData.map((el) => el.imageBig);

  const galleryFillter = (el) => {
    const singleData = imagesMaped.filter((item) => item.includes.includes(el));
    console.log("test");
    setData(singleData);
  };

  // console.log(imagesMaped);

  return (
    <div className={classes.cont}>
      <div className={classes.listCont}>
        <ul>
          {newColl.map((el) => (
            <li key={el.id}>
              <button
                onClick={() => {
                  galleryFillter(el);
                }}
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.contImage}>
        {data.reverse().map((el) => (
          <div key={el.id} className={classes.imgCont}>
            <img src={el.imageBig} className={classes.singleImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const imagesMaped = [...buketSetData];

  return {
    props: { imagesMaped },
  };
}

export default Gallery;
