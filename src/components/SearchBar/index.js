import React, { useState, useEffect, useRef } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// sytles
import { Wraper, Content, Contain } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (initial.current) {
        initial.current = false;
        return;
      }

      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wraper>
      <Contain>
        <Content>
          <img src={searchIcon} alt="Search-Icon" />
          <input
            type="text"
            placeholder="Search Movies"
            value={state}
            onChange={(event) => setState(event.currentTarget.value)}
          />
        </Content>
      </Contain>
    </Wraper>
  );
};

export default SearchBar;
