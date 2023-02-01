import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import VotesBar from "./VotesBar";
const BASE_URL = 'https://colors-app1.herokuapp.com';




const ColorCard = () => {
  const [colors, setColors] = useState([]);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/colors`)
      .then((colors) => {
        setColors(colors.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const votesHandler = async (value) => {
    let inc = value.votes + 1;
    setVotes((value.votes = inc));
    const newVote = { votes: value.votes };
    await axios
      .put(`${BASE_URL}/api/colors/${value._id}`, newVote)
      .then((response) => votes);
  };

  const getMaxVote = () => {
    const max = Math.max(...colors.map((color) => color.votes));
    return max;
  };

  return colors.map((index) => {
    return (
      <div key={index._id}>
        <button
          className="card"
          style={{ backgroundColor: `${index.color}` }}
          onClick={() => votesHandler(index)}
        >
          <VotesBar votes={index.votes} maxVote={getMaxVote()} />
        </button>
      </div>
    );
  });
};

export default ColorCard;
