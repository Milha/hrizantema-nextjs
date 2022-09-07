import GoogleMapColore from "../icons/GoogleMapColor";
import clases from "./MapButton.module.scss";

function MapButton({ hrefData }) {
  return (
    <div className={clases.cont}>
      <p>
        <a href={hrefData}>Nadjite nas ovde:</a>
      </p>
      <div>
        <a href={hrefData}>
          <GoogleMapColore />
        </a>
      </div>
      <p>
        <a href={hrefData}>
          Groblje Orlovača lok. 30 Beograd
        </a>
      </p>
    </div>
  );
}

export default MapButton;
