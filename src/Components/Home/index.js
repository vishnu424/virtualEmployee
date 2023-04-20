import React, { useState, useEffect } from "react";

import { InputBase, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import ListItems from "../UsersList";
import { useDispatch } from "react-redux";
import { homeActions } from "../../Redux/actions/Home.actions";

const Home = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    const resData = await dispatch(homeActions.getPosts(""));

    const filteredData = resData.filter((each) =>
      each.title.includes(searchText)
    );

    dispatch(homeActions.getSearchData(filteredData));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    async function fetchData() {
      await dispatch(homeActions.getPosts());
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mainContainer">
        <SearchIcon />
        <InputBase
          placeholder="Search…"
          style={{ flex: 1, marginLeft: "8px" }}
          inputProps={{ "aria-label": "search" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IconButton onClick={handleSearch} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <ListItems />
    </>
  );
};

export default Home;
