function Sort({ sortOption, setSortOption }) {
  return (
    <div>
      <label htmlFor="sort" className="label block mb-2">
        Sort Expenses
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="input"
      >
        <option value="date">Date (Newest)</option>
        <option value="amount">Amount (High → Low)</option>
        <option value="title">Title (A → Z)</option>
      </select>
    </div>
  );
}

export default Sort;
