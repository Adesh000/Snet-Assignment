import "./App.css";
import Card from "./Components/Card";

const user_details = {
    total: 6,
    users: [
        {
            id: 1,
            img: "1.png",
            name: "sam",
            year: 2000,
            color: "#98B2D1",
            indian: "yes",
            mobile: "1234567890",
        },
        {
            id: 2,
            img: "2.png",
            name: "john",
            year: 2001,
            color: "#C74375",
            indian: "no",
            mobile: "1234567890",
        },
        {
            id: 3,
            img: "3.png",
            name: "joe",
            year: 2002,
            color: "#BF1932",
            indian: "yes",
            mobile: "1234567890",
        },
        {
            id: 4,
            img: "4.png",
            name: "christan",
            year: 2003,
            color: "#7BC4C4",
            indian: "",
            mobile: "1234567890",
        },
        {
            id: 5,
            img: "5.png",
            name: "Ben",
            year: 2004,
            color: "#E2583E",
            indian: "no",
            mobile: "1234567890",
        },
        {
            id: 6,
            img: "6.png",
            name: "conway",
            year: 2005,
            color: "#53B0AE",
            indian: "yes",
            mobile: "1234567890",
        },
    ],
};

function App() {
    return (
        <>
            <div className="main-container">
                {user_details["users"].map((item) => {
                    return <Card itemData={item} />;
                })}
            </div>
        </>
    );
}

export default App;
