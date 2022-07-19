import MiniSimilar from "../cards/MiniSimilar";
import classes from "./SimilarsCont.module.scss";
// import { venciItemData } from "../../data/venciItemData";
// import { similarsVenciFinder } from "../../utils/similarsFinder";

export default function SimilarsCont({ data }) {
  // console.log(data[0], "FROM SIMILAR CONT 1");
  // console.log(data.similar[1], "FROM SIMILAR CONT 2");
  // console.log(data.similar[2], "FROM SIMILAR CONT 3");
  // console.log(small, "FROM SIMILAR CONT 3");
  const similarData1 = data[0];
  const similarData2 = data[1];
  const similarData3 = data[2];

  return (
    <div className={classes.cont}>
      <MiniSimilar miniSimilarFinal={similarData1} />
      <MiniSimilar miniSimilarFinal={similarData2} />
      <MiniSimilar miniSimilarFinal={similarData3} />
    </div>
  );
}
