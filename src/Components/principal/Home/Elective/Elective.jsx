import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Elective.css";
const Elective = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const goToProf1 = () => {
    navigate(`/prof1/${id}`);
  };

  const goToProf2 = () => {
    navigate(`/prof2/${id}`);
  };

  const goToOpen1 = () => {
    navigate(`/open1/${id}`);
  };

  const goToOpen2 = () => {
    navigate(`/open2/${id}`);
  };

  const goToOpen3 = () => {
    navigate(`/open3/${id}`);
  };

  const goToOpen4 = () => {
    navigate(`/open4/${id}`);
  };

  const goToOpen5 = () => {
    navigate(`/open5/${id}`);
  };
  return (
    <div>
      <div className="Elective">
        <div className="displayElective">
          <button onClick={goToProf1} className="ElectiveBtn">
            <div className="elective">
              <h3>Professional elective 1</h3>
            </div>
          </button>
          <button onClick={goToProf2} className="ElectiveBtn">
            <div className="elective">
              <h3>Professional elective 2</h3>
            </div>
          </button>{" "}
          <button onClick={goToOpen1} className="ElectiveBtn">
            <div className="elective">
              <h3>Open elective 1</h3>
            </div>
          </button>{" "}
          <button onClick={goToOpen2} className="ElectiveBtn">
            <div className="elective">
              <h3>Open elective 2</h3>
            </div>
          </button>{" "}
          <button onClick={goToOpen3} className="ElectiveBtn">
            <div className="elective">
              <h3>Open elective 3</h3>
            </div>
          </button>
          <button onClick={goToOpen4} className="ElectiveBtn">
            <div className="elective">
              <h3>Open elective 4</h3>
            </div>
          </button>
          <button onClick={goToOpen5} className="ElectiveBtn">
            <div className="elective">
              <h3>Open elective 5</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Elective;
