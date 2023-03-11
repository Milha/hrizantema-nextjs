import Link from 'next/link';
import classes from './FrontCard.module.scss';

export default function FrontCard({ data }) {
  // console.log(data, "From CARDS");
  return (
    <article className={classes.cont}>
      <div className={classes.image_cont}>
        {/* <img
          src={data.cardImage}
          width="15rem"
          height="30rem"
          alt="proizvodi u ponudi"
          loading="lazy"
        /> */}

        <picture>
          <source srcSet={data.cardImageWebP} type="image/webp" />
          <img src={data.cardImage} alt={data.alt} loading="lazy" />
        </picture>
      </div>

      <div className={classes.text_cont}>
        <Link href={data.offerLink} >
          
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          
        </Link>
      </div>
    </article>
  );
}
