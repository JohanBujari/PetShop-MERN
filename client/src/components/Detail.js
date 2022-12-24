import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [petDetail, setPetDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getPet/${id}`)
      .then((res) => {
        console.log(res);
        setPetDetail(res.data.onePet);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div>
          <h1>Pet Shelter</h1>
          <p>Details about : {petDetail.name}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link to="/">Back to home</Link>
          <button
            style={{
              color: "white",
              backgroundColor: "red",
              boxShadow: "2px 2px black",
            }}
            onClick={deleteHandler}
          >
            Adopt {petDetail.name}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <h4>Pet type</h4>
          <span>{petDetail.petType}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <h4>Description</h4>
          <span>{petDetail.description}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <h4>Skills</h4>
          <span>{petDetail.skill1}</span>
          <span>{petDetail.skill2}</span>
          <span>{petDetail.skill3}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
