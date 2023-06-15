import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
