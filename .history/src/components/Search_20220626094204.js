import React from "react";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState("");
  return (
    <div className="search_bar_container">
      <input type="text" placeholder="type here" className="search_bar" onChange={e=>{
            setSearch(e.currentTarget.value)
            
      }}></input>
      <br />
      <select
        className="Drop"
        onChange={(e) => {
         setType(e.currentTarget.value);
         console.log(type)
        }}
      >
        <option>--Filter By--</option>
        <option>Name</option>
        <option>Email</option>
        <option>Phone Number</option>
      </select>
    </div>
  );
};

export default Search;
