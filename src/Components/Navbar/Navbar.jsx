import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function Nav(props) {
  const navigate = useNavigate();
  const logOutUser = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Elective
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href={`/getallsubjects/${ele}/${branch}/${id}`}>
                  Home
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href={`/profile/${props.id}`}>
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={logOutUser}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
