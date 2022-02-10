import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AddFood from "./AdminPages/AddFood/AddFood";
import Dashboard from "./AdminPages/Dashboard/Dashboard";
import DashboardNav from "./AdminPages/Dashboard/Compo/DashboardNav";
import AddStudent from "./AdminPages/AddStudent/AddStudent";
import FoodList from "./AdminPages/FoodList/FoodList";
import StudentList from "./AdminPages/StudentList/StudentList";
import FoodServing from "./AdminPages/FoodServing/FoodServing";

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardNav />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              path="/dashboard"
              element={
                <h1 className="text-center md:text-4xl text-2xl my-8 font-mono font-semibold">
                  Welcome To Dashboard
                </h1>
              }
            />
            <Route path="/dashboard/addFood" element={<AddFood />} />
            <Route path="/dashboard/addStudent" element={<AddStudent />} />
            <Route path="/dashboard/foodlist" element={<FoodList />} />
            <Route path="/dashboard/studentlist" element={<StudentList />} />
            <Route path="/dashboard/foodserving" element={<FoodServing />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
