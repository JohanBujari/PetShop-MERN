import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [petsUpdated, setPetsUpdated] = useState({
    name: " ",
    petType: " ",
    description: " ",
    skill1: " ",
    skill2: " ",
    skill3: " ",
  });
  const [backEndErrors, setbackEndErrors] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeHandler = (e) => {
    setPetsUpdated({
      ...petsUpdated,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getPet/${id}`)
      .then((res) => {
        console.log(res);
        setPetsUpdated(res.data.onePet);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/editPet/${id}`, {
        ...petsUpdated,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.err)
          setbackEndErrors(err.response.data.err.errors);
      });
    navigate("/");
  };
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h1>Pet Shelter</h1>
        <p>Edit {petsUpdated.name}</p>
      </div>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          border: "1px solid black",
          width: "600px",
          padding: "30px",
          margin: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ textAlign: "left" }}>Pet Name:</label> <br></br>
          <input
            name="name"
            value={petsUpdated.name}
            onChange={onChangeHandler}
          />
          <br></br>
          <label style={{ textAlign: "left" }}>Pet Type:</label> <br></br>
          <input
            name="petType"
            value={petsUpdated.petType}
            onChange={onChangeHandler}
          />
          <br></br>
          <label style={{ textAlign: "left" }}>Pet Description:</label>{" "}
          <br></br>
          <input
            name="description"
            value={petsUpdated.description}
            onChange={onChangeHandler}
          />
          <br></br>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              boxShadow: "2px 2px black",
            }}
          >
            Edit Pet
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h6>Skills (optional)</h6>
          <label style={{ textAlign: "left" }}>Skill 1:</label> <br></br>
          <input
            name="skill1"
            value={petsUpdated.skill1}
            onChange={onChangeHandler}
          />
          <label style={{ textAlign: "left" }}>Skill 2:</label> <br></br>
          <input
            name="skill2"
            value={petsUpdated.skill2}
            onChange={onChangeHandler}
          />
          <label style={{ textAlign: "left" }}>Skill 3:</label> <br></br>
          <input
            name="skill3"
            value={petsUpdated.skill3}
            onChange={onChangeHandler}
          />{" "}
          <br></br>
        </div>
      </form>
    </div>
  );
};

export default Update;
