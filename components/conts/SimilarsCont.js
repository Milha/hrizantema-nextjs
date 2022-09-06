import MiniSimilar from "../cards/MiniSimilar";
import classes from "./SimilarsCont.module.scss";
// import { venciItemData } from "../../data/venciItemData";
// import { similarsVenciFinder } from "../../utils/similarsFinder";

export default function SimilarsCont({ data, small, similarPropData }) {
  // console.log(
  //   similarPropData.similar[0],
  //   "From container similar ALTTTTTTTTTTTTTTTT 1"
  // );
  // console.log(
  //   similarPropData.similar[1],
  //   "From container similar ALTTTTTTTTTTTTTTTT 2"
  // );
  // console.log(
  //   similarPropData.similar[2],
  //   "From container similar ALTTTTTTTTTTTTTTTT 3"
  // );
  const similarData11 = similarPropData.similar[0];
  const similarData22 = similarPropData.similar[1];
  const similarData33 = similarPropData.similar[2];
  // const similarData1 = data.similar[0];
  // const similarData2 = data.similar[1];
  // const similarData3 = data.similar[2];

  return (
    <div className={small ? classes.cont_horizontal : classes.cont}>
      {/* {!small ? `<h3>Aloha</h3>` : `<h3>Working if</h3>`} */}
      <MiniSimilar
        // miniSimilarFinal={similarData1}
        miniSimilarFinal1={similarData11}
        small={small}
      />
      <MiniSimilar
        // miniSimilarFinal={similarData2}
        miniSimilarFinal1={similarData22}
        small={small}
      />
      <MiniSimilar
        // miniSimilarFinal={similarData3}
        miniSimilarFinal1={similarData33}
        small={small}
      />
    </div>
  );
}
