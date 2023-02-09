import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "../UserContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Home() {
//   const { currentUser } = useContext(UserContext);
  console.debug("Homepage");

  return (
      <div className="Home">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Jobly</h1>
          <p className="lead">All the jobs in one, convenient place.</p>
          
                  <p>
                    <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link>
                  </p>

        </div>
      </div>
  );
}

export default Home;