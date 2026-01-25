import React from "react";

import ceremonies from "../../data/ceremony/ceremonies.json";

import classes from "./schedule-ceremony.module.scss";

const ScheduleCeremony = () => {
  // const cleanedCeremony = ceremonies.ceremonies.map((cer) => {
  //   return cer.ceremonies.map((c) => {
  //     return c.ceremonyDate;
  //   });
  // });
  // console.log("Iz", cleanedCeremony);
  return (
    <div className={classes.container}>
      {ceremonies.ceremonies.map((cer) => {
        return (
          <div key={cer._id} className={classes.ceremony}>
            {cer.ceremonies.map((c) => {
              return (
                <div key={c._id} className={classes.ceremonyItem}>
                  <p>
                    {new Date(c.ceremonyDate).toLocaleString("sr-RS", {
                      weekday: "long",
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className={classes.name}>
                    {c.deceased.firstName} {c.deceased.lastName}
                  </p>
                  <p></p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleCeremony;
