import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Nav from "../../Navbar/Navbar";

const Profile = () => {
  const [data, setData] = useState({});

  const { id } = useParams();
  const getUserData = async () => {
    const userData = await axios.get(`http://localhost:8080/profile/${id}`);
    setData(userData.data);
  };

  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
    authUser();
  }, []);

  const authUser = async () => {
    const storedId = await localStorage.getItem("usn");
    if (id != storedId) {
      navigate("/");
    }
  };

  const applyProf1 = () => {
    if (data.prof1 != "") {
      alert("Already applied");
    } else {
      navigate(`/getallsubjects/prof1/${data.branch}/${data._id}`);
    }
  };

  const applyopen1 = () => {
    if (data.open1 != "") {
      alert("Already applied");
    } else {
      navigate(`/getallsubjects/open1/${data.branch}/${data._id}`);
    }
  };

  const applyprof2 = () => {
    if (data.prof2 != "") {
      alert("Already applied");
    } else {
      navigate(`/getallsubjects/prof2/${data.branch}/${data._id}`);
    }
  };

  const applyProf3 = () => {
    if (data.prof3 != "") {
      alert("Already applied");
    } else {
      navigate(`/getallsubjects/open2/${data.branch}/${data._id}`);
    }
  };

  const applyopen3 = () => {
    if (data.open3 != "") {
      alert("Already applied");
    } else {
      navigate(`/getallsubjects/open4/${data.branch}/${data._id}`);
    }
  };

  const applyProf4 = () => {
    if (data.prof4 != "") {
      alert("Already applied");
    } else {
      navigate(`/getallsubjects/open3/${data.branch}/${data._id}`);
    }
  };

  return (
    <div>
      <Nav id={id} />
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="row">
              <h1> Welcome @ {data._id}</h1>
            </div>
            <div className="p">Name: {data.name}</div>
            <div className="p">Branch: {data.branch}</div>
            <div className="p">Email: {data.email}</div>
            <div className="p">Phone: {data.phone}</div>
            <div className="row">
              <Link to={`/edit/${id}`}>Edit</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Elective</th>
                <th scope="col">Subject</th>
                <th scope="col">Confirmation</th>
                <th scope="col">Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Professional elective-1( 6th sem )</th>
                <td>{data.prof1}</td>
                <td>{data.prof1Confirm}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => applyProf1()}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Open elective-1( 6th sem )</th>
                <td>{data.open1}</td>
                <td>{data.open1Confirm}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => applyopen1()}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Professional elective-2( 7th sem )</th>
                <td>{data.prof2}</td>
                <td>{data.prof2Confirm}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => applyprof2()}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Professional elective-3( 7th sem )</th>
                <td>{data.prof3}</td>
                <td>{data.prof3Confirm}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => applyProf3()}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Open elective-2( 7th sem )</th>
                <td>{data.open2}</td>
                <td>{data.open2Confirm}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => applyopen3()}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Professional elective-4( 8th sem )</th>
                <td>{data.prof4}</td>
                <td>{data.prof4Confirm}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => applyProf4()}
                  >
                    Apply
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
