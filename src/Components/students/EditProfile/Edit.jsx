import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../../Navbar/Navbar"
const Edit = () => {
  const [data, setData] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();
  const updateData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const authUser = () => {
    const storedId = localStorage.getItem("usn");

    if (id != storedId) {
      navigate("/");
    }
  };

  const getUserData = async () => {
    const existUser = await axios.get(`http://localhost:8080/profile/${id}`);
    setData(existUser.data);
  };

  useEffect(() => {
    getUserData();
    authUser();
  }, []);

  const handleSubmit = async () => {
    console.log(data);

    try {
      if (
        !data._id ||
        !data.name ||
        !data.email ||
        !data.phone ||
        !data.branch ||
        !data.password ||
        !data.cpassword
      ) {
        alert("Enter all the fields");
      } else {
        if (data.password != data.cpassword) {
          alert("Password did not match");
        } else {
          await axios
            .post(`http://localhost:8080/edit/${data._id}`, data)
            .then((succ) => {
              alert("User updated successfully");
            })
            .catch((err) => {
              alert("Please enter all fields correctly");
            });
        }
      }
    } catch (error) {
      alert("Internal error occured, please again later");
    }
    navigate(`/profile/${data._id}`);
    // const existUser = await axios.get(
    //   `http://localhost:8080/profile/${id}`
    // );

    // if (
    //   !data._id ||
    //   !data.name ||
    //   !data.email ||
    //   !data.phone ||
    //   !data.branch ||
    //   !data.password ||
    //   !data.cpassword
    // ) {
    //   alert("Enter all the fields");
    // } else {
    //   if (!existUser.data.msg) {
    //     alert("Account already exist");
    //   } else {
    //     await axios
    //       .post("http://localhost:8080/register", data)
    //       .then((succ) => {
    //         alert("User created successfully");
    //         window.location.reload();
    //       })
    //       .catch((err) => {
    //         alert(err);
    //       });
    //   }
    // }
  };
  return (
    <div>
      <Nav id={id}/>
      <div className="container">
        <div className="row">
          <div className="row">
            <input
              type="text"
              onChange={(e) => updateData(e)}
              name="_id"
              value={data._id}
              placeholder="USN"
              className="form-control mt-4"

            />
          </div>
          <div className="row">
            <input
              type="text"
              onChange={(e) => updateData(e)}
              name="name"
              value={data.name}
              placeholder="Name"
              className="form-control mt-4"

            />
          </div>
          <div className="row">
            <input
              type="phone"
              onChange={(e) => updateData(e)}
              name="phone"
              value={data.phone}
              placeholder="Phone"
              className="form-control mt-4"

            />
          </div>
          <div className="row">
            <input
              type="email"
              onChange={(e) => updateData(e)}
              name="email"
              value={data.email}
              placeholder="Email-ID"
              className="form-control mt-4"

            />
          </div>
          <div className="row">
            <input
              type="text"
              onChange={(e) => updateData(e)}
              name="branch"
              value={data.branch}
              placeholder="Branch"
              className="form-control mt-4"

            />
          </div>
          <div className="row">
            <input
              type="password"
              onChange={(e) => updateData(e)}
              name="password"
              value={data.password}
              placeholder="Password"
              className="form-control mt-4"

            />
          </div>
          <div className="row">
            <input
              type="password"
              onChange={(e) => updateData(e)}
              name="cpassword"
              value={data.cpassword}
              placeholder="Confirm Password"
              className="form-control mt-4"

            />
          </div>
          <div className="row position-relative">
            <button  className="position-absolute top-50 start-50 translate-middle mt-5 w-25 btn btn-success" onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
