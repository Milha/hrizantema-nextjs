import FrontCard from "./FrontCard";

// import SmallCard from "./SmallCard";

import classes from "./Offers.module.scss";

export default function Offers({ data }) {
  // console.log(data[0].imgs, "from OFFERS");

  return (
    <section className={classes.cont}>
      {data.map((pic, i) => (
        <div key={i}>
          <FrontCard data={pic} />
        </div>
      ))}
      {/* <FrontCard data={data} />
      <FrontCard />
      <FrontCard /> */}
    </section>
  );
}
