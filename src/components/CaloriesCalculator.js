import "./CaloriesCalculator.css";
import { useState } from "react";
import fitness from "../images/fitness.svg";
import arrowRight from "../images/icons/arrow-right.svg";
import arrowBack from "../images/icons/arrow-back.svg";

function CaloriesCalculator() {
  const [result, setResult] = useState(0);

  const [age, setAge] = useState({ value: undefined });
  const [ageError, setAgeError] = useState(false);
  const [height, setHeight] = useState({ value: undefined });
  const [weight, setWeight] = useState({ value: undefined });
  const [gender, setGender] = useState({ value: "Male" });

  const calculate = (e) => {
    e.preventDefault();
    console.log(gender.value, age.value, height.value, weight.value);
    var g = gender.value;
    var a = age.value;
    var h = height.value;
    var w = weight.value;

    var calcResult;
    if (!ageError) {
      switch (g) {
        case "Female":
          calcResult = 10 * w + 6.25 * h - 5 * a - 161;
          break;
        case "Male":
          calcResult = 10 * w + 6.25 * h - 5 * a + 5;
          break;
        default:
          calcResult = 0;
          break;
      }
      setResult(calcResult);
    }
  };

  const checkAgeError = () => {
    if (age.value < 15 || age.value > 80) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
  };
  return (
    <div className="d-flex w-100">
      <img src={fitness} className="h-100" alt="fitness" />
      {!result ? (
        <div className="d-flex flex-column m-5 w-100 justify-content-between p-4">
          <div>
            <h1 className="dark-blue-color fw-bold">Calories Calculator</h1>
            <p className="gray-color fw-bold">
              Calculate your calories per day
            </p>
          </div>

          <form className="d-flex flex-column mt-5 mb-5 dark-blue-color">
            <label>
              Gender
              <div onChange={(e) => setGender({ value: e.target.value })}>
                <label>
                  <input type="radio" value="Male" name="gender" checked />
                  <span className="me-5 ms-2 value-size"> Male</span>
                </label>
                <label>
                  <input type="radio" value="Female" name="gender" />
                  <span className="me-5 ms-2 value-size">Female</span>
                </label>
              </div>
            </label>

            <label className="mt-4">
              Age
              <input
                className={
                  ageError
                    ? "input-field p-2 d-block w-100 value-size error-border"
                    : "input-field p-2 d-block w-100 value-size "
                }
                type="number"
                placeholder="age should be between 15 to 80"
                value={age.value}
                onBlur={checkAgeError}
                onChange={(e) => {
                  setAge({ value: e.target.value });
                }}
              />
            </label>
            {ageError ? (
              <div className="red-color value-size">
                Please Enter age between 15 to 80
              </div>
            ) : (
              ""
            )}

            <label className="mt-4">
              Height
              <input
                className="input-field p-2 d-block w-100 value-size"
                type="number"
                value={height.value}
                onChange={(e) => setHeight({ value: e.target.value })}
              />
            </label>

            <label className="mt-4">
              Weight
              <input
                className="input-field p-2 d-block w-100 value-size"
                type="number"
                value={weight.value}
                onChange={(e) => setWeight({ value: e.target.value })}
              />
            </label>
          </form>

          <button
            className="align-self-end orange-bg button-style p-2 white-color fw-bold mt-5"
            disabled={
              !gender.value || !age.value || !height.value || !weight.value
            }
            onClick={calculate}
          >
            Calculate
            <img
              src={arrowRight}
              className="arrow-size ms-2"
              alt="arrow right"
            />
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column m-5 w-100 p-4">
          <div className="d-flex">
            <img
              role="button"
              src={arrowBack}
              className="arrow-size me-5 cursor-pointer"
              alt="arrow back"
              onClick={() => {
                setResult(0);
                setAge({ value: undefined });
                setGender({ value: "Male" });
                setHeight({ value: undefined });
                setWeight({ value: undefined });
              }}
            />
            <h1 className="dark-blue-color fw-bold">Result</h1>
          </div>
          <div className="blue-color result-size h-100 m-auto d-flex flex-column justify-content-center">
            {result}
            <div className="fs-6 gray-color align-self-end ">Calories/day</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaloriesCalculator;
