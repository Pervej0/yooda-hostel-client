import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./AdminPages/Dashboard/Dashboard";
import DashboardNav from "./AdminPages/Dashboard/Compo/DashboardNav";
import AddStudent from "./AdminPages/AddStudent/AddStudent";
import StudentList from "./AdminPages/StudentList/StudentList";

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardNav />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              path="/"
              element={
                <h1 className="text-center md:text-4xl text-2xl my-8 font-mono font-semibold">
                  Welcome To Dashboard
                </h1>
              }
            />
            <Route path="/dashboard/addStudent" element={<AddStudent />} />
            <Route path="/dashboard/studentlist" element={<StudentList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
