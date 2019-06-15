import React from "react";
import "./SearchBar.css";

import { SearchForm } from "./SearchForm";
import { InstaLogo } from "./InstaLogo";
import { SearchIcons } from "./SearchIcons";

export const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <InstaLogo />
      <SearchForm />
      <SearchIcons />
    </div>
  );
};
