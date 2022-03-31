import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

const Subject = () => {
  const { id } = useParams();
  const { branch } = useParams();
  const { ele } = useParams();
  const { subid } = useParams();
  const [data, setData] = useState("");

  const [subject, setSubject] = useState([]);
  useEffect(() => {
    authUser();
    getUserData();
  }, []);

  const navigate = useNavigate();

  const [count, setCount] = useState();
  const getUserData = async () => {
    const existUser = await axios.get(`http://localhost:8080/profile/${id}`);
    setData(existUser.data);

    console.log(existUser.data);
    const getSubject = await axios.get(
      `http://localhost:8080/getsubject/${branch}/${id}/${subid}`
    );

    await axios
      .get(`http://localhost:8080/getSubject/${ele}/${subject.courseTitle}`)
      .then((succ) => {
        setCount(succ.data);
      })
      .catch((err) => {
        console.log("Oops Error occured");
      });

    setSubject(getSubject.data);
    console.log(ele + subject.courseTitle);
  };

  const authUser = () => {
    const storedId = localStorage.getItem("usn");
    if (id != storedId) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const values = e.target.name;
    if (e.target.name == "") {
      alert("Please select your subject");
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const applySubject = async (e) => {
    if (ele == "prof1" || ele == "prof2" || ele=="prof3" || ele=="prof4") {
      if (branch == data.branch) {
        if (count < 60) {
          await axios
            .post(`http://localhost:8080/subject/${data._id}`, data)
            .then((succ) => {
              alert("Subject applied successfully");
              navigate(`/profile/${id}`);
            })
            .catch(() => {
              alert("Oops... Error occured");
            });
        } else {
          alert("Subject count exceeded... Please apply for another subject");
        }
      } else {
        alert("Kindly choose subject of your branch");
      }
    } else {
      if (branch != data.branch) {
        if (count < 1) {
          await axios
            .post(`http://localhost:8080/subject/${data._id}`, data)
            .then((succ) => {
              alert("Subject applied successfully");
              navigate(`/profile/${id}`);
            })
            .catch(() => {
              alert("Oops... Error occured");
            });
        } else {
          alert("Subject count exceeded... Please apply for another subject");
        }
      } else {
        alert("Kindly choose subject of any other branch");
      }
    }
  };

  return (
    <div className="Subject">
      <Nav id={id} ele={ele} branch={data.branch} />{" "}
      <div className="SubjectData">
        <div className="row">
          <div className="col-2">
            <Sidebar ele={ele} id={id} />
          </div>
          <div className="col-9">
            <div className="container">
              <h1>Subject code: {subject._id}</h1>
              <p>Course Title: {subject.courseTitle}</p>
              <p>Branch: {subject.branch}</p>
              <p>Course Type: {subject.courseType}</p>
              <p>Duration: {subject.duration}</p>
              <p>Credit Points: {subject.creditPoints}</p>
              <p>Intended Audience: {subject.intendedAudience}</p>
              <p>Pre-requisites: {subject.preRequisites}</p>
              <div className="row">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Course Layout
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{subject.courseLayout}</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Course Objectives
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        {subject.courseObjective}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Course Outcomes
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{subject.courseOutcome}</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Pedagogy
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{subject.courseLayout}</div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Books
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{subject.books}</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Reference books
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{subject.referenceBooks}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <select
                  className=" mt-4 form-select selectOption"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name={ele}
                >
                  <option selected className="option">
                    Please choose the subject
                  </option>
                  <option value={subject.courseTitle} className="option">
                    {subject.courseTitle}
                  </option>
                </select>
                <button
                  className="mt-4 btn btn-success"
                  onClick={(e) => applySubject(e)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
