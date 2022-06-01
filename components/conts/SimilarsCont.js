import MiniSimilar from "../cards/MiniSimilar";
import classes from "./SimilarsCont.module.scss";
// import { venciItemData } from "../../data/venciItemData";
// import { similarsVenciFinder } from "../../utils/similarsFinder";

export default function SimilarsCont({ data }) {
  // console.log(data.similar[0], "FROM SIMILAR CONT 1");
  // console.log(data.similar[1], "FROM SIMILAR CONT 2");
  // console.log(data.similar[2], "FROM SIMILAR CONT 3");
  const similarData1 = data.similar[0];
  const similarData2 = data.similar[1];
  const similarData3 = data.similar[2];

  // const founded = data.find((el, i) => {
  //   el.id == data.id;
  //   // console.log(el.test, i, "from funtion");
  //   // console.log(data.id, "from funtion data");
  //   return el.test;
  // });
  // console.log(founded, "FROM Founded");
  // const pic1 = founded.test[0];
  // const pic2 = founded.test[1];
  // const pic3 = founded.test[2];
  // console.log(founded.test[2]);
  // const findImage1 = data.find((el) => el.id == pic1);
  // const findImage2 = data.find((el) => el.id == pic2);
  // const findImage3 = data.find((el) => el.id == pic3);
  // console.log(findImage1, "from image founded");
  // console.log(findImage2, "from image founded");
  // console.log(findImage3, "from image founded");
  // const firstImage = {
  //   miniImage: findImage1.imageBigWebP,
  //   miniPrice: findImage1.price,
  //   miniLink: findImage1.link,
  // };
  // const secondImage = {
  //   miniImage: findImage2.imageBigWebP,
  //   miniPrice: findImage2.price,
  //   miniLink: findImage1.link,
  // };
  // const thirdImage = {
  //   miniImage: findImage3.imageBigWebP,
  //   miniPrice: findImage3.price,
  //   miniLink: findImage1.link,
  // };

  // console.log(firstImage.miniPrice, "Form silira final");
  //   const arr1 = [];
  //   const arr2 = arr1.push(data);
  //   console.log(typeof data);
  //   const threeItems = data.toArray();
  return (
    <div className={classes.cont}>
      {/* {similarData.map((item, i) => (
        <MiniSimilar key={i} miniSimilarFinal={miniData[i]} />
      ))} */}

      <MiniSimilar miniSimilarFinal={similarData1} />
      <MiniSimilar miniSimilarFinal={similarData2} />
      <MiniSimilar miniSimilarFinal={similarData3} />
    </div>
  );
}
