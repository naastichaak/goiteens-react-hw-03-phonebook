function Filter({ onFilterChange, filterVal }) {
  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <input
      type="text"
      onInput={handleFilterChange}
      placeholder="Search contact name"
      value={filterVal}
    />
  );
}
export default Filter;
