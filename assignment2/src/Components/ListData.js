import React from "react";
import "./style.css";

const ListData = ({ formData, deleteData }) => {
    return (
        <>
            {formData.map((item) => (
                <div className="list">
                    <div className="left">
                        <h3>{item.fullName}</h3>
                        <div className="user-detail">
                            <p>{item.username}</p>
                            <p>{item.mobile}</p>
                            <p>{item.email}</p>
                            <p>{item.password}</p>
                        </div>
                    </div>
                    <button onClick={() => deleteData(item.username)}>Remove</button>
                </div>
            ))}
        </>
    );
};

export default ListData;
