import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Add = () => {
  const [book, setBook] = useState("");

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const { id } = useParams();

  const handleSubmit = async () => {
    console.log(book)
    await axios.post(`http://localhost:8080/addsubject/${id}`, book).then(succ => {
      alert("Success")
      window.location.reload()
    }).catch(err => {
      alert("Error")
    })
    // if (
    //   !book.branch ||
    //   !book._id ||
    //   !book.courseTitle ||
    //   !book.courseLayout ||
    //   !book.courseType
      
    // ) {
    //   alert("Enter all fields");
    // } else {
      // await axios
      //   .post(`http://localhost:8080/addsubject/${id}`, book)
      //   .then((succ) => {
      //     alert("Subject added successfully");
      //   })
      //   .catch((err) => {
      //     alert("Oops subject cant be added");
      //   });
    // }
  };

  return (
    <div className="container">
      <div class="input-group mt-4">
        <span class="input-group-text">Subject Code</span>
        <input
          onChange={(e) => handleChange(e)}
          class="form-control"
          type="text"
          name="_id"
          placeholder="Sub Code"
        />
      </div>
      <div class="input-group mt-4">
        <span class="input-group-text">Course Title</span>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          class="form-control"
          name="courseTitle"
          placeholder="Course Title"
        />
      </div>
      <div class="input-group mt-4">
        <span class="input-group-text">Branch</span>

        <select name="branch" onChange={(e) => handleChange(e)} id="branch">
          <option value="">Select your branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="ME">ME</option>
          <option value="CV">CV</option>
        </select>
      </div>
      <div class="input-group mt-4">
        <span class="input-group-text">Course Type</span>
        <input
          onChange={(e) => handleChange(e)}
          class="form-control"
          type="text"
          name="courseType"
          placeholder="Course Type"
        />
      </div>

      <div class="input-group mt-4">
        <span class="input-group-text">Duration</span>
        <input
          onChange={(e) => handleChange(e)}
          class="form-control"
          type="text"
          name="duration"
          placeholder="Duration"
        />
      </div>
      <div class="input-group mt-4">
        <span class="input-group-text">Credit Points</span>
        <input
          onChange={(e) => handleChange(e)}
          class="form-control"
          type="text"
          name="creditPoints"
          placeholder="Credit Points"
        />
      </div>

      <div class="input-group mt-4">
        <span class="input-group-text">indended Audience</span>
        <input
          onChange={(e) => handleChange(e)}
          class="form-control"
          type="text"
          name="indendedAudience"
          placeholder="Indended Audience"
        />
      </div>

      <div class="input-group mt-4">
        <span class="input-group-text">Pre-Requisites</span>
        <input
          onChange={(e) => handleChange(e)}
          class="form-control"
          type="text"
          name="preRequisites"
          placeholder="Pre-Requisites"
        />
      </div>

      <div class="form-floating mt-4">
        <textarea
          onChange={(e) => handleChange(e)}
          name="courseLayout"
          class="form-control"
          placeholder="Course Layout"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Course Layout</label>
      </div>

      <div class="form-floating mt-4">
        <textarea
          onChange={(e) => handleChange(e)}
          name="courseObjective"
          class="form-control"
          placeholder="Course Objective"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Course Objective</label>
      </div>

      <div class="form-floating mt-4">
        <textarea
          onChange={(e) => handleChange(e)}
          name="courseOutcome"
          class="form-control"
          placeholder="Course Layout"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Course Outcome</label>
      </div>

      <div class="form-floating mt-4">
        <textarea
          onChange={(e) => handleChange(e)}
          name="pedagogy"
          class="form-control"
          placeholder="Pedagogy"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Pedagogy</label>
      </div>

      <div class="form-floating mt-4">
        <textarea
          onChange={(e) => handleChange(e)}
          name="books"
          class="form-control"
          placeholder="Books"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Books</label>
      </div>

      <div class="form-floating mt-4">
        <textarea
          onChange={(e) => handleChange(e)}
          name="referenceBooks"
          class="form-control"
          placeholder="referenceBooks"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Reference Books</label>
      </div>

      <button
        onClick={handleSubmit}
        type="button"
        class=" position-relative mt-5 top-50 start-50 translate-middle btn btn-outline-success"
      >
        Apply
      </button>
      {/* 
      
      
     
      
      
      
      
     
      <input type="text" name="books" placeholder="Books" />
      <input type="text" name="referenceBooks" placeholder="Reference Books" /> */}
    </div>
  );
};

export default Add;
