import classes from "./ReminderCard.module.scss";

const ReminderCard = () => {
  return (
    <div className={classes.cont}>
      <p className={classes.text}>
        Podsetnik za datum zadušnica na groblju Orlovača i drugim beogradskim
        grobljima: 05.10.2024 Miholjske zadušnice
      </p>
    </div>
  );
};
export default ReminderCard;
