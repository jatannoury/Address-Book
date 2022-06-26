import React, { useEffect, useState } from "react";

const Search = () => {
  const [collect, setCollect] = useState([]);
  const [isReady, setIsReady] = useState(false);
  console.log("LINE 6", isReady);
  console.log("LINE 7", collect);
  useEffect(() => {
    if (collect) {
      console.log("INNNNN");
      setIsReady(true);
    }
  }, [collect]);
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
      console.log(data);
      setCollect(data.message);

      // if (data.code) {
      //   alert("Phone Number already in use");
      // }
    } catch (error) {
      console.log(error);
    }
  }
  collect["message"] && console.log(collect["message"]);
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
          {collect &&
            collect.map((e) => {
              console.log(e);
              console.log("YOOOOOOO");
              return (
                <tr>
                  <td className="border"></td>
                  <td>{e.fullName}</td>
                  <td>{e.phoneNb}</td>
                  <td>{e.email}</td>
                  <td>{e.rlsStatus}</td>
                  <td>{[e.lat, "° , ", e.long, "°"]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

     
    </div>
  );
};

export default Search;
