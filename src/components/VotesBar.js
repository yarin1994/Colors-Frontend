import React from "react";
import '../style.css';

const VotesBar = ({ votes, maxVote }) => {
  let barWidth = 200*(votes/maxVote);
  return <div className="barr" style={{width: `${barWidth}px`}}>{votes}</div>;
};

export default VotesBar;
