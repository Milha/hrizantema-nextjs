import MiniSimilar from "../cards/MiniSimilar";
import classes from "./SimilarsCont.module.scss";

export default function SimilarsCont({ data, small, similarPropData }) {
  const similarData1 = similarPropData.similar[0];
  const similarData2 = similarPropData.similar[1];
  const similarData3 = similarPropData.similar[2];

  return (
    <div className={small ? classes.cont_horizontal : classes.cont}>
      {similarPropData.similar.map((item) => (
        <div key={item.miniSimilarTitle}>
          <MiniSimilar
            // miniSimilarFinal={similarData1}
            miniSimilarFinal1={item}
            small={small}
          />
        </div>
      ))}
      {/* <MiniSimilar
        // miniSimilarFinal={similarData1}
        miniSimilarFinal1={similarData1}
        small={small}
      />
      <MiniSimilar
        // miniSimilarFinal={similarData2}
        miniSimilarFinal1={similarData2}
        small={small}
      />
      <MiniSimilar
        // miniSimilarFinal={similarData3}
        miniSimilarFinal1={similarData3}
        small={small}
      /> */}
    </div>
  );
}
