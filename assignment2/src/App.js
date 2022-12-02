import "./App.css";
import React, { useState, useEffect } from "react";
import ListData from "./Components/ListData";

//get Data
const getData = () => {
    const data = localStorage.getItem("formData");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

function App() {
    const [formData, setFormData] = useState(getData());

    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            username,
            fullName,
            mobile,
            email,
            password,
            gender,
        };

        setFormData([...formData, data]);
        setUsername("");
        setEmail("");
        setFullName("");
        setGender("");
        setMobile("");
        setPassword("");
    };

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    //delete Data
    const deleteData = (username) => {
        const filteredData = formData.filter((element) => {
            return element.username !== username;
        });

        setFormData(filteredData);
    };
    return (
        <div className="main">
            <div className="form-container">
                <form
                    autoComplete="off"
                    className="form-group"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <br />
                    <label htmlFor="full-name">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="full-name"
                        required
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                    />
                    <br />
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        required
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <br />
                    <div className="gender-container">
                        <label htmlFor="">Gender</label>
                        <div className="gender-male">
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                onClick={(e) => setGender(e.target.value)}
                                value={gender}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="gender-female">
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                onClick={(e) => setGender(e.target.value)}
                                value={gender}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-success btn-m">
                        Submit
                    </button>
                </form>
            </div>
            <div className="list-container">
                <ListData formData={formData} deleteData={deleteData} />
            </div>
        </div>
    );
}

export default App;
