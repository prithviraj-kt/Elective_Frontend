import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Prof2 = () => {
  useEffect(() => {
    getUserData();
  }, []);

  const [data, setData] = useState([]);

  const { ele } = useParams();
  const [branch, setBranch] = useState("");
  const getUserData = async () => {
    await axios
      .get("http://localhost:8080/principal")
      .then((user) => {
        setData(user.data);
        console.log(user.data);
      })
      .catch((err) => {
        alert("Error occured");
      });
  };

  const handleChange = (e) => {
    setBranch({ ...branch, [e.target.name]: e.target.value });
  };

  const displayData = (item) => {
    if (item._id !== "principal") {
      if (item.branch == branch.branch) {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.branch}</td>
            <td>{item.prof2}</td>
            <td>{item.prof2Confirm}</td>
          </tr>
        );
      }
    }
  };
  return (
    <div>
      <div className="container">
        <select name="branch" onChange={(e) => handleChange(e)} id="">
          <option value="">Select a branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="CV">CV</option>
          <option value="ME">ME</option>
        </select>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Branch</th>
              <th scope="col">Professional Elective-2</th>
              <th scope="col">Confirmation</th>
            </tr>
          </thead>
          <tbody>{data.map((item) => displayData(item))}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Prof2;
