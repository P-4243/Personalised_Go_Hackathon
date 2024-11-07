import React from 'react'
import './App.css';
const Checkmark = ({p,h1}) => {
    return (
        <div className="middle">
        <img src={`${process.env.PUBLIC_URL}/greenTick.png`} />

        <p>{p}</p>
      <button className="buttonBlue">Get Certificate</button>
      <h1>{h1}</h1>
       </div>
      );
}

export default Checkmark