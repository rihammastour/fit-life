import logo from "../images/logo-2.svg";
import calculator from "../images/icons/calculator.svg";
import list from "../images/icons/list.svg";

import { useNavigate, useLocation } from "react-router-dom";

import "./Sidemenu.css";

function Sidemenu() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="d-flex flex-column align-items-center light-gray-bg h-100">
      <img src={logo} className="logo-size m-2" alt="logo" />

      <div className="mt-5 d-flex flex-column">
        <div
          className={
            location.pathname === "/fit-life/"
              ? "orange-border-left mt-5"
              : "mt-5"
          }
          to="/CaloriesCalculator"
        >
          <img
            src={calculator}
            className={
              location.pathname === "/fit-life/"
                ? "m-2 ms-1 icons-size"
                : "m-2 icons-size"
            }
            alt="calculator-icon"
            onClick={() => {
              navigate("/fit-life/");
            }}
          />
        </div>
        <div
          className={
            location.pathname === "/fit-life/plan-list"
              ? "orange-border-left mt-4"
              : "mt-4"
          }
        >
          <img
            src={list}
            className={
              location.pathname === "/fit-life/plan-list"
                ? "m-2 ms-1 icons-size"
                : "m-2 icons-size"
            }
            alt="list-icon"
            onClick={() => {
              navigate("/fit-life/plan-list");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
