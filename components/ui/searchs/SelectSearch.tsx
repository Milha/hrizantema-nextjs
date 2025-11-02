import classes from "./SelectSearch.module.scss";

import { klasicneSuzeOptions } from "../../../utils/constants/includings";

const SelectSearch = ({ selectedFlower, setSelectedFlower }) => {
  return (
    <>
      <div className={classes.selectSearchCont}>
        <label htmlFor="flowerOption" className="block mb-2 font-medium">
          Pretraži po sadržaju:
        </label>
        <select
          id="flowerOption"
          value={selectedFlower}
          onChange={(e) => setSelectedFlower(e.target.value)}
        >
          <option value="">Izaberite cvet</option>
          {klasicneSuzeOptions.map((flower) => (
            <option key={flower} value={flower}>
              {flower}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectSearch;
