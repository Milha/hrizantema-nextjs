import React from "react";

import ceremonies from "../../data/ceremony/ceremonies.json";

const ScheduleCeremony = () => {
  const cleanedCeremony = ceremonies.ceremonies.map((cer) => {
    return cer.ceremonies;
  });
  console.log(cleanedCeremony);
  return (
    <div>
      {ceremonies.ceremonies.map((cer) => {
        return (
          <div key={cer._id}>
            {cer.ceremonies.map((c) => {
              return (
                <div key={c._id}>
                  <p>
                    {new Date(c.ceremonyDate).toLocaleString("sr-RS", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </p>
                  <p>{c.deceased.firstName}</p>
                  <p>{c.deceased.lastName}</p>
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
