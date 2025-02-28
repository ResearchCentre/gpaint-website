import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { setRegFullData } from "../../../Slice/registerDataSlice";
import { setspositionFullData } from "../../../Slice/positionDataSlice";

const UISearchBox = ({ placeholder, onPage, changeFullData }) => {
  const [searchText, setSearchText] = useState("");
  const SearchFilter = (e) => {
    if (onPage === "user") {
      handleSearch(e.target.value.trim());
    }

    if (onPage === "position") {
      handlePositionSearch(e.target.value.trim());
    }

  };

  const regFullDataCopy = useSelector(setRegFullData);
  const positionDataCopy = useSelector(setspositionFullData);

  const handleSearch = (event) => {
    if (event.length < 1) {
      changeFullData(regFullDataCopy);
    } else {
      const query = event.toLowerCase();
      // setSearchQuery(query);
      const filteredResults = regFullDataCopy.filter((item) =>
        item.fullname.toLowerCase().includes(query)
      );
      // setFilteredData(filteredResults);
      changeFullData(filteredResults)
    }

  };

  const handlePositionSearch = (event) => {
    console.log("event.length", event?.length)
    if (event?.length === 0) {
      changeFullData(positionDataCopy);
    } else {
      const query = event.toLowerCase();
      const filteredResults = positionDataCopy.filter((item) =>
        item.positionData.key_1.toLowerCase().includes(query)
      );
      changeFullData(filteredResults)
    }

  };

  return (
    <>
      <InputGroup className="mb-3 customize_searchbox" size="lg">
        <Form.Control
          placeholder={placeholder}
          onChange={SearchFilter}
          className="border border-secondary"
        // value={searchText}
        // name="searchText"
        />
        <Button
          variant="outline-light border border-secondary text-muted"
          id="button-addon2"
        >
          <SearchIcon />
        </Button>
      </InputGroup>
    </>
  );
};

export default UISearchBox;
