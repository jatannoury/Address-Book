import React from "react";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState("");
  return (
    <div className="search_bar_container">
      <input
        type="text"
        placeholder="type here"
        className="search_bar"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }}
      ></input>
      <br />
      <select className="Drop">
        <option
          onChange={(e) => {
            setType(e.target.value);
            console.log(type);
          }}
        >
          --Filter By--
        </option>
        <option
          onSubmit={(e) => {
            setType(e.target.value);
            console.log(type);
          }}
        >
          Name
        </option>
        <option
          onChange={(e) => {
            setType(e.currenttarget.value);
            console.log(type);
          }}
        >
          Email
        </option>
        <option
          onChange={(e) => {
            setType(e.target.value);
            console.log(type);
          }}
        >
          Phone Number
        </option>
      </select>
    </div>
  );
};

export default Search;
