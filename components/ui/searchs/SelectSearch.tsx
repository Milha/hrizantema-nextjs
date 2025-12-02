import classes from "./SelectSearch.module.scss";

const SelectSearch = ({ selectedFlower, setSelectedFlower, flowerOptions }) => {
  return (
    <>
      <div className={classes.selectSearchCont}>
        <label htmlFor="flowerOption" className="block mb-2 font-medium">
          Pretraži po sadržaju:
        </label>
        <div className={classes.selectWithButton}>
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
          {selectedFlower && (
            <button
              className={classes.cancelButton}
              onClick={() => setSelectedFlower("")}
            >
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectSearch;
