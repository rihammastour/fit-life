import Sidemenu from "./components/Sidemenu";
import CaloriesCalculator from "./components/CaloriesCalculator";
import PlanList from "./components/PlanList";

import "./App.css";

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="d-flex h-100">
      <BrowserRouter>
        <Sidemenu />
        <Routes>
          <Route path="/fit-life" element={<CaloriesCalculator />} />
          <Route path="/fit-life/plan-list" element={<PlanList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
