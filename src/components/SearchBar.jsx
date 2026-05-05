function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <label htmlFor="search" className="label block mb-2">
        Search Expense
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
    </div>
  );
}

export default SearchBar;
