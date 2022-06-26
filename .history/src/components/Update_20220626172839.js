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
    

    try {
      const res = await fetch( `http://localhost:3001/api/user/update_contact?type=${type}&content=${content}&nb=${localStorage.getItem("contact_nb")}`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      
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
