import React, { useState } from "react";
import { Search, SearchIcon, SearchInput } from "../styles/header";

export interface HeaderSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({
  children,
  searchTerm,
  setSearchTerm,
  ...restProps
}) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() =>
          setSearchActive(
            (searchActive) => (!searchActive as unknown) as boolean
          )
        }
      >
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        active={searchActive}
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search film's and series"
      />
    </Search>
  );
};

export default HeaderSearch;
