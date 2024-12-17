import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

interface SearchDoaInputProps {
  onSearch: (query: string) => void;
}

const SearchDoaInput: React.FC<SearchDoaInputProps> = ({ onSearch }) => {
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
    <div className="flex items-center justify-center mt-5">
      <SearchIcon className="mr-5" />
      <Input
        placeholder="Cari Doa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="rounded-full w-3/6 mr-3 text-base md:text-md dark:border dark:border-white"
      />
      <Button
        onClick={handleSearch}
        className="rounded-full bg-green-500 text-white"
      >
        Cari
      </Button>
    </div>
  );
};

export default SearchDoaInput;
