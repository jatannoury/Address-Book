import React, { useState, useEffect } from "react";

const Update = () => {
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
    let url =;
    

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
        <option>--Enter Field--</option>
        <option>Name</option>
        <option>Email</option>
        <option>Phone Number</option>
        <option>Location</option>
        <option>Marital Status</option>
      </select>
      <br />
      <button
        className="Search"
        onClick={(e) => {
          console.log(type, search);
          searchfor(type, search);
        }}
      >
        Submit 
      </button>
      <br />
    </div>
  );
};

export default Update;
