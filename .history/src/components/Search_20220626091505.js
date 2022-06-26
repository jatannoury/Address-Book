import React from 'react'

const Search = () => {
  return (
    <div className="search_bar_container">
                <input
                  type="text"
                  placeholder="type here"
                  className="search_bar"
                ></input>
                <br />
                <select className="Drop">
                  <option>--Filter By--</option>
                  <option>Name</option>
                  <option>Email</option>
                  <option>Phone Number</option>
                </select>
              </div>
            </div>
}

export default Search