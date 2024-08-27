const Short = ({ setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSortChange} className="select  font-medium select-bordered w-full max-w-xs">
        <option disabled selected>Choice Your Books</option>
        <option value="rating" className="font-bold">Rating</option>
        <option value="pages" className="font-bold">Number of Pages</option>
        <option value="year" className="font-bold">Published Year</option>
      </select>
    </div>
  );
};

export default Short;
