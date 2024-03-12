import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Complain from "./users/Complain";
import Home from "./pages/Home";
import EditUser from "./users/EditUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import ViewUser from "./users/ViewUser";
import Dashboard from "./pages/Dashboard";
import Canteen from "./pages/Canteen";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/visitor" element={<Home/>}/>
        <Route exact path="/complaints" element={<Complain/>}/>
        <Route exact path="/canteen" element={<Canteen/>}/>
        <Route exact path="/visitor/adduser" element={<AddUser/>}/>
        <Route exact path="/visitor/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/visitor/viewuser/:id" element={<ViewUser/>}/>
        </Routes>
</Router>
    </div>
  );
}

export default App;
