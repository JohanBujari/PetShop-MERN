import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const List = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllPets")
      .then((res) => {
        console.log(res);
        setPets(res.data.allPets);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h1>Pet Shelter</h1>
        <br></br>
        <p>These pets are looking for a good home</p>
      </div>

      <table border={"1px"} style={{ width: "400px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index}>
              <td>{pet.name}</td>
              <td>{pet.petType}</td>
              <td>
                <Link to={`/pet/details/${pet._id}`}>Details</Link> |{" "}
                <Link to={`/pet/edit/${pet._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
