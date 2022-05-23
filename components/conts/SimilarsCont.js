import MiniSimilar from "../cards/MiniSimilar";
import classes from "./SimilarsCont.module.scss";
// import { venciItemData } from "../../data/venciItemData";
// import { similarsVenciFinder } from "../../utils/similarsFinder";

export default function SimilarsCont({ miniData }) {
  console.log(miniData, "FROM SIMILAR CONT");
  const data = miniData;

  const founded = data.find((el, i) => {
    el.id === data.id;
    return el.test;
  });
  console.log(founded, "FROM Founded");
  const pic1 = founded.test[0];
  const pic2 = founded.test[1];
  const pic3 = founded.test[2];
  // console.log(founded.test[2]);
  const findImage1 = data.find((el) => el.id == pic1);
  const findImage2 = data.find((el) => el.id == pic2);
  const findImage3 = data.find((el) => el.id == pic3);
  const firstImage = {
    miniImage: findImage1.imageBigWebP,
    miniPrice: findImage1.price,
    miniLink: findImage1.link,
  };
  const secondImage = {
    miniImage: findImage2.imageBigWebP,
    miniPrice: findImage2.price,
    miniLink: findImage1.link,
  };
  const thirdImage = {
    miniImage: findImage3.imageBigWebP,
    miniPrice: findImage3.price,
    miniLink: findImage1.link,
  };

  console.log(firstImage);
  //   const arr1 = [];
  //   const arr2 = arr1.push(data);
  //   console.log(typeof data);
  //   const threeItems = data.toArray();
  return (
    <div className={classes.cont}>
      <MiniSimilar miniSimilarFinal={firstImage} />
      <MiniSimilar miniSimilarFinal={secondImage} />
      <MiniSimilar miniSimilarFinal={thirdImage} />
    </div>
  );
}
