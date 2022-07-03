import MiniSimilar from "../cards/MiniSimilar";
import classes from "./SimilarsCont.module.scss";
// import { venciItemData } from "../../data/venciItemData";
// import { similarsVenciFinder } from "../../utils/similarsFinder";

export default function SimilarsCont({ data, small }) {
  // console.log(data.similar[0], "FROM SIMILAR CONT 1");
  // console.log(data.similar[1], "FROM SIMILAR CONT 2");
  // console.log(data.similar[2], "FROM SIMILAR CONT 3");
  const similarData1 = data.similar[0];
  const similarData2 = data.similar[1];
  const similarData3 = data.similar[2];

  return (
    <div className={small ? classes.cont_horizontal : classes.cont}>
      {/* {similarData.map((item, i) => (
        <MiniSimilar key={i} miniSimilarFinal={miniData[i]} />
      ))} */}

      {/* {!small ? `<h3>Aloha</h3>` : `<h3>Working if</h3>`} */}
      <MiniSimilar miniSimilarFinal={similarData1} small={small} />
      <MiniSimilar miniSimilarFinal={similarData2} small={small} />
      <MiniSimilar miniSimilarFinal={similarData3} small={small} />
    </div>
  );
}
