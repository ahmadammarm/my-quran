import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center mt-5 px-4">
      <div className="relative w-full max-w-xl">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Cari Surah..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-12 pr-24 h-12 rounded-full border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 text-gray-700 bg-white shadow-sm"
        />
        <Button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 shadow-md transition-all duration-300"
        >
          Cari
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
