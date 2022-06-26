import React from "react";

const Search = () => {
async function searchfor(type,content){
    let url="localhost:3001/api/user"
    if(type=="Name")url+="/get_ByName"
    else if(type=="Email")url+="/get_ByEmail"
    else url+="get_ByPhoneNb"
    try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fullName: name,
            phoneNb: nb,
            rlsStatus: status,
            email: mail,
            long: loc.split(/[, ]+/)[0],
            lat: loc.split(/[, ]+/)[1],
            token: localStorage.getItem("access_token"),
            curr_user: jwt_decode(localStorage.getItem("access_token"))._id,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.code) {
          alert("Phone Number already in use");
        }
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
      <button className="Search" onClick={e=>{
        console.log(type,search)
      }}>Search</button>
      <div className="retrieved">

      </div>
    </div>
  );
};

export default Search;
