import React from "react";
import "./style.css";

const Card = ({ itemData }) => {
    return (
      <div className="card-container" style={{ backgroundColor: itemData.indian === ""?"#D9D9D9":itemData.indian === "yes" ?"#C9DAF8" : "#E6B8AF", borderColor: itemData.color}} >
            <div className="image-container" style={{ backgroundColor: itemData.color}}>
                <img src={itemData.img} alt={itemData.id} />
            </div>
            <p>{itemData.name} </p>
            <p>{itemData.year} </p>
            <p>{itemData.mobile} </p>
        </div>
    );
};

export default Card;
