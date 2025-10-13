import GoogleMapColore from "../icons/GoogleMapColor";
import clases from "./MapButton.module.scss";

function MapButton({ hrefData }) {
  return (
    <div className={clases.cont}>
      <p>
        <a href={hrefData} target="_blank" rel="noopener noreferrer">
          Nadjite nas ovde:
        </a>
      </p>
      <div>
        <a
          href={hrefData}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Otvori mapu Cvećare Hrizantema na Google Maps"
        >
          <GoogleMapColore />
        </a>
      </div>
      <p>
        <a href={hrefData} target="_blank" rel="noopener noreferrer">
          Groblje Orlovača lok. 30 Beograd
        </a>
      </p>
    </div>
  );
}

export default MapButton;
