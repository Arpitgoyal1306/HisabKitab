function Filter({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <label htmlFor="category-filter" className="label block mb-2">
        Filter by Category
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="input"
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default Filter;
