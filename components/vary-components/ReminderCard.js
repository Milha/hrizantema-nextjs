import classes from "./ReminderCard.module.scss";

const ReminderCard = () => {
  return (
    <div className={classes.cont}>
      <p className={classes.text}>
        Podsetnik za datum zadušnica na groblju Orlovača i drugim beogradskim
        grobljima: 22.06.2024 Zadušnice - Letnje zadušnice
      </p>
    </div>
  );
};
export default ReminderCard;
