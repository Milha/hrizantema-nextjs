import classes from "./SelectSearch.module.scss";

import { flowerOptions } from "../../../utils/constants/includings";

import { useState } from "react";

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
          {flowerOptions.map((flower) => (
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
