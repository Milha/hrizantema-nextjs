import React, { useState } from "react";

import ChevronLineUp from "../icons/ChevronLineUp";
import ChevronLineDown from "../icons/ChevronLineDown";

import classes from "./QandAs.module.scss";

function QandAs({ singleQandA: { question, answer } }) {
  const [answDrop, setAnswDrop] = useState(false);
  const dropHanadler = () => setAnswDrop(!answDrop);

  //   console.log(question, "From QandAs.js");

  return (
    <article className={classes.cont}>
      <section>
        <div className={classes.q_cont} onClick={dropHanadler}>
          <h3>{question}</h3>
          <div className={classes.arrows}>
            {answDrop ? (
              <p>
                <ChevronLineDown />
              </p>
            ) : (
              <p>
                <ChevronLineUp />
              </p>
            )}
          </div>
        </div>
        <div className={classes.a_cont}>
          {answDrop ? <p>{answer}</p> : null}
        </div>
      </section>
    </article>
  );
}

export default QandAs;
