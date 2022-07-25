import GoogleMapColore from "../icons/GoogleMapColor";
import clases from "./MapButton.module.scss";

function MapButton({ hrefData }) {
  return (
    <div className={clases.cont}>
      <p>
        <a href={hrefData}>Put do nas</a>{" "}
      </p>
      <div>
        <a href={hrefData}>
          <GoogleMapColore />
        </a>
      </div>
    </div>
  );
}

export default MapButton;
