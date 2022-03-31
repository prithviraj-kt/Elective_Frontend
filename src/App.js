import AddSubject from "./Components/hod/AddSubject/Add";
import EditSubject from "./Components/hod/EditSubject/Edit";
import AllSubject from "./Components/hod/AllSubject/AllSubject";
import HodHome from "./Components/hod/Home/Home";
import Prof1 from "./Components/principal/Home/Home/Prof1";
import Prof2 from "./Components/principal/Home/Home/Prof2";
import Open1 from "./Components/principal/Home/Home/Open1";
import Open2 from "./Components/principal/Home/Home/Open2";
import Open3 from "./Components/principal/Home/Home/Open3";
import Open4 from "./Components/principal/Home/Home/Open4";
import Open5 from "./Components/principal/Home/Home/Open5";

import PrincipalElective from "./Components/principal/Home/Elective/Elective";
import StudentHome from "./Components/students/Home/Home";
import Login from "./Components/students/Login/Login";
import Signup from "./Components/students/Signup/Signup";
import Profile from "./Components/students/Profile/Profile";
import EditProfile from "./Components/students/EditProfile/Edit";
import Subject from "./Components/students/Subject/Subject";
import NotFound from "./Components/NotFound/Notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/edit/:id" element={<EditProfile />} />
          <Route
            exact
            path="/getallsubjects/:ele/:branch/:id"
            element={<StudentHome />}
          />
          <Route exact path="/home" element={<StudentHome />} />
          <Route
            exact
            path="/getsubject/:ele/:branch/:id/:subid"
            element={<Subject />}
          />
          <Route exact path="/elective/:id" element={<PrincipalElective />} />
          <Route exact path="/prof1/:id" element={<Prof1 />} />
          <Route exact path="/prof2/:id" element={<Prof2 />} />
          <Route exact path="/open1/:id" element={<Open1 />} />
          <Route exact path="/open2/:id" element={<Open2 />} />
          <Route exact path="/open3/:id" element={<Open3 />} />
          <Route exact path="/open4/:id" element={<Open4 />} />
          <Route exact path="/open5/:id" element={<Open5 />} />

          <Route exact path="/hodhome/:id" element={<HodHome />} />
          <Route exact path="/addsubject/:id" element={<AddSubject />} />
          <Route
            exact
            path="/updatesubject/:id/:subid"
            element={<EditSubject />}
          />
          <Route exact path="/allSubject/:id" element={<AllSubject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
