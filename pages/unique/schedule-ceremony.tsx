import React from "react";
import { GetStaticProps } from "next";

import { ScheduleCeremonyProps, CeremonyGroup } from "../../types/ceremony";

import classes from "./schedule-ceremony.module.scss";

const ScheduleCeremony = ({ ceremonies }: ScheduleCeremonyProps) => {
  return (
    <div className={classes.container}>
      {ceremonies.map((cer) => {
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
                    {c.firstName} {c.lastName}
                  </p>
                  <p>
                    {"   Godina rođenja:  "}
                    {new Date(c.yearOfBirth).toLocaleString("sr-RS", {
                      year: "numeric",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  ScheduleCeremonyProps
> = async () => {
  const data = (await import("../../data/ceremony/ceremonies.json")).default;

  const cleaned: CeremonyGroup[] = data.ceremonies.map((cer) => ({
    _id: cer._id,
    cemeteryName: cer.cemetery?.name,
    ceremonies: cer.ceremonies.map((c) => ({
      _id: c._id,
      ceremonyDate: c.ceremonyDate,
      firstName: c.deceased.firstName,
      lastName: c.deceased.lastName,
      yearOfBirth: c.deceased.birthDate,
    })),
  }));

  return {
    props: { ceremonies: cleaned },
  };
};

export default ScheduleCeremony;
