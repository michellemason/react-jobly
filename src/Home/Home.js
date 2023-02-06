import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

function Home() {
    return(
        <div className="container">
        <div className="Home-content">
            <h1>Jobly</h1>
        </div>
    </div>
    )
}

export default Home;