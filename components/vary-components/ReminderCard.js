import classes from "./ReminderCard.module.scss";

const ReminderCard = () => {
  return (
    <div className={classes.cont}>
      <p className={classes.text}>
        Podsetnik za datum zadusnica na groblju Orlovača i drugim beogradskim
        grobljima: 09.03.2024 Zadušnice - Zimske zadušnice
      </p>
    </div>
  );
};
export default ReminderCard;
