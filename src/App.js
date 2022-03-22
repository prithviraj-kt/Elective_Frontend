import AddSubject from "./Components/hod/AddSubject/Add";
import EditSubject from "./Components/hod/EditSubject/Edit";
import AllSubject from "./Components/hod/AllSubject/AllSubject";
import HodHome from "./Components/hod/Home/Home";
import PrincipalHome from "./Components/principal/Home/Home";
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
            path="/getallsubjects/:branch/:id"
            element={<StudentHome />}
          />
          <Route
            exact
            path="/getsubject/:branch/:id/:subid"
            element={<Subject />}
          />
          <Route exact path="/principal/:id" element={<PrincipalHome />} />
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
