import classes from "./ReminderCard.module.scss";


const ReminderCard = () => {
  let currMonth =  new Date();
  let month =  currMonth.getMonth() + 1;

  
  let reccenica = (month >= 3 && month <= 9 ) ? "Kapija na groblju Orlovača je otvorena od 07.00 do 19.00 - letnji period od 01.04 do 30.09 " : "Kapija na groblju Orlovača je otvorena od 07.00 do 18.00 - zimski period od 01.10 do 31.03";
  
  // console.log(reccenica);

  return (
    <div className={classes.cont}>
      <p className={classes.text}>
        Podsetnik za datum zadušnica na groblju Orlovača i drugim beogradskim
        grobljima: 02.11.2024 Mitrovske jesenje zadušnice
      </p>
      <hr></hr>
      <p className={classes.text}>{reccenica}</p>
    </div>
  );
};
export default ReminderCard;
