import React from "react";

const AddSection = () => {
  const [name, setName] = useState("");
  const [nb, setNb] = useState("");
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("");
  const [loc, setLoc] = useState("");
  return (
    <>
      <Navbar />
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
          <tr>
            <AiOutlineUser className="iconn" />
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(name);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setNb(e.target.value);
                  console.log(nb);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setMail(e.target.value);
                  console.log(mail);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setStatus(e.target.value);
                  console.log(status);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setLoc(e.target.value);
                  console.log(loc);
                }}
              ></input>
            </td>
            <th
              className="add"
              onClick={(e) => {
                console.log(name, mail, nb, status, loc);
              }}
            >
              Add
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AddSection;
