import React from "react";
import Nav from "../Navbar/Navbar";
import {Link} from "react-router-dom"
const Notfound = () => {

 

  return <div>
    <div className="container">
      Oops...Page not found

      <Link to="/">Go to Login page</Link>
    </div>
  </div>;
};

export default Notfound;
