import React, { useEffect, useState } from "react";

const Search = () => {
  

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
