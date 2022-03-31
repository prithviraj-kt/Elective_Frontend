import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
const Home = () => {
  const { id } = useParams();
  const { branch } = useParams();
  const { ele } = useParams();

  const [data, setData] = useState("");

  const [subject, setSubject] = useState([]);
  useEffect(() => {
    authUser();
    getUserData();
  }, [branch]);

  const navigate = useNavigate();

  const getUserData = async () => {
    const existUser = await axios.get(`http://localhost:8080/profile/${id}`);
    setData(existUser.data);

    const getAllSubject = await axios.get(
      `http://localhost:8080/getallsubjects/${branch}/${id}`
    );
    setSubject(getAllSubject.data);
  };

  const authUser = async () => {
    const storedId = await localStorage.getItem("usn");
    if (id != storedId) {
      navigate("/");
    }
  };

  const gotoSubject = (sub) => {
    navigate(`/getsubject/${ele}/${branch}/${id}/${sub}`);
  };

  const displaySubjects = (e) => {
    return (
      <div>
        <div className="profilePostDisplay">
          <h1 className="profilePostTitle">{e.courseTitle}</h1>
          <p>{e._id}</p>
          <p className="profilePostdesc">{e.description}</p>
          <button onClick={() => gotoSubject(e._id)}>View</button>
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <Nav id={id} ele={ele} branch={data.branch} />
      {/* <div className="container-fluid">
        <div className="row profilePostCard">
        </div>
      </div> */}
      <div className="home">
        <div className="row">
          <div className="col-2">
            <Sidebar ele={ele} id={id} />
          </div>
          <div className="col-10 profilePostCard">
            {subject.map((item) => displaySubjects(item))}
          </div>
        </div>
        {/* <div>
        </div>
        <div></div> */}
      </div>
    </div>
  );
};

export default Home;
