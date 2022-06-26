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
      <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Marital Status</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {info["result"] &&
          info["result"]["contacts"].map((e) => (
            <tr>
              <AiOutlineUser className="iconn" />
              <td>{e.fullName}</td>
              <td>{e.phoneNb}</td>
              <td>{e.email}</td>
              <td>{e.rlsStatus}</td>
              <td>{[e.lat, "° , ", e.long, "°"]}</td>
              <th
                className="del"
                onClick={(e) => {
                  delContact(e.target.parentElement.children[2].innerText);
                }}
              >
                Delete
              </th>
            </tr>
          ))}
      </tbody>
    </table>

    </div>
  );
};

export default Search;
