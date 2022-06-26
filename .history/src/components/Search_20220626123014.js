import React, { useState } from "react";

const Search = () => {
  const [collect, setCollect] = useState({});
  let print = false;
  async function searchfor(type, content) {
    let url = `http://localhost:3001/api/user`;
    if (type == "Name") url += `/get_ByName?name=${content}`;
    else if (type == "Email") url += `/get_ByEmail?name=${content}`;
    else url += `/get_ByPhoneNb?name=${content}`;
    console.log(url);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: content,
        }),
      });
      const data = await res.json();
      data && setCollect(data);
      console.log(data);
      // if (data.code) {
      //   alert("Phone Number already in use");
      // }
    } catch (error) {
      console.log(error);
    }
  }
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState("");
  return (
    <div className="search_bar_container">
      <input
        type="text"
        placeholder="type here"
        className="search_bar"
        onChange={(e) => {
          setSearch(e.currentTarget.value);
          console.log(search);
          print = true;
        }}
      ></input>
      <br />
      <select
        className="Drop"
        onChange={(e) => {
          setType(e.currentTarget.value);
          console.log(type);
        }}
      >
        <option>--Filter By--</option>
        <option>Name</option>
        <option>Email</option>
        <option>Phone Number</option>
      </select>
      <br />
      <button
        className="Search"
        onClick={(e) => {
          console.log(type, search);
          searchfor(type, search);
        }}
      >
        Search
      </button>
      <br />

      {print & collect.length &&
        collect.map((e) => {
            console.log(e)
            return(
          <>
            <div>{e.message[0].fullName}</div>
            <div>{e.message[0].phoneNb}</div>
            <div>{e.message[0].email}</div>
            <div>{e.message[0].rlsStatus}</div>
            <div>{[e.message[0].lat, "° , ", e.message[0].long, "°"]}</div>
          </>
            )})}
    </div>
 
        )

export default Search;
