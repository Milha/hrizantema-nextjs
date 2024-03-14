import classes from "./ReminderCard.module.scss";

const ReminderCard = () => {
  return (
    <div className={classes.cont}>
      <p className={classes.text}>
        Podsetnik za datum zadušnica na groblju Orlovača i drugim beogradskim
        grobljima: 13.05.2024 Zadušnice - Pobusani ponedeljak
      </p>
    </div>
  );
};
export default ReminderCard;
