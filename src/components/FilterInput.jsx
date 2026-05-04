const FilterInput = ({ filter, setFilter }) => {
  return (
    <div className="filter">       
      <input
        id="filter"
        type="text"
        placeholder="Filter coins..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
