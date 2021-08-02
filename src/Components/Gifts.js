import React from 'react';
import '../Components/Gifts.css';

function Gif({ title, id, url }) {
  return (
    // <a href={`#${id}`} className="Gift">
    <div className="Gift">
      <h4>{title}</h4>
      <img src={url} alt={id} ></img>
      <br />
    </div>
  );
}

export default Gif;

