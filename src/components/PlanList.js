import "./PlanList.css";

function PlanList() {
  return (
    <div className="p-5 w-100 h-100">
      <h1 className="dark-blue-color fw-bold ms-2">
        2000, 1500, and 1200 Calorie Sample Meal Plans
      </h1>
      <table className="table table-bordered mt-5">
        <thead className="light-gray-bg text-center">
          <tr>
            <th>Meal</th>
            <th>1200 Cal Plan</th>
            <th>1500 Cal Plan</th>
            <th>2000 Cal Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            <td>
              <div>
                All-bran cereal
                <span className="blue-color fw-bold ms-2">(125)</span>
              </div>
              <div>
                Milk
                <span className="blue-color fw-bold ms-2">(50)</span>
              </div>
              <div>
                Banana
                <span className="blue-color fw-bold ms-2">(90)</span>
              </div>
            </td>
            <td>
              <div>
                Granola
                <span className="blue-color fw-bold ms-2">(120)</span>
              </div>
              <div>
                Greek yogurt
                <span className="blue-color fw-bold ms-2">(120)</span>
              </div>
              <div>
                Blueberries
                <span className="blue-color fw-bold ms-2">(40)</span>
              </div>
            </td>
            <td>
              <div>
                Buttered toast
                <span className="blue-color fw-bold ms-2">(150)</span>
              </div>
              <div>
                Egg
                <span className="blue-color fw-bold ms-2">(80)</span>
              </div>
              <div>
                Banana
                <span className="blue-color fw-bold ms-2">(90)</span>
              </div>
              <div>
                Almonds
                <span className="blue-color fw-bold ms-2">(170)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Snack</td>
            <td>
              <div>
                Cucumber
                <span className="blue-color fw-bold ms-2">(30)</span>
              </div>
              <div>
                Avocado dip
                <span className="blue-color fw-bold ms-2">(50)</span>
              </div>
            </td>
            <td>
              <div>
                Orange
                <span className="blue-color fw-bold ms-2">(70)</span>
              </div>
            </td>
            <td>
              <div>
                Greek yogurt
                <span className="blue-color fw-bold ms-2">(120)</span>
              </div>
              <div>
                Blueberries
                <span className="blue-color fw-bold ms-2">(40)</span>
              </div>
            </td>
          </tr>
          <tr className="fw-bold light-gray-bg">
            <td>Total</td>
            <td>345 Calories</td>
            <td>350 Calories</td>
            <td>650 Calories</td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>
              <div>
                Grilled cheese with tomato
                <span className="blue-color fw-bold ms-2">(300)</span>
              </div>
              <div>
                Salad
                <span className="blue-color fw-bold ms-2">(50)</span>
              </div>
            </td>
            <td>
              <div>
                Chicken and vegetable soup
                <span className="blue-color fw-bold ms-2">(300)</span>
              </div>
              <div>
                Bread
                <span className="blue-color fw-bold ms-2">(100)</span>
              </div>
            </td>
            <td>
              <div>
                Grilled chicken
                <span className="blue-color fw-bold ms-2">(225)</span>
              </div>
              <div>
                Grilled vegetables
                <span className="blue-color fw-bold ms-2">(125)</span>
              </div>
              <div>
                Pasta
                <span className="blue-color fw-bold ms-2">(185)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Snack</td>
            <td>
              <div>
                Walnuts
                <span className="blue-color fw-bold ms-2">(100)</span>
              </div>
            </td>
            <td>
              <div>
                Apple
                <span className="blue-color fw-bold ms-2">(75)</span>
              </div>
              <div>
                Peanut butter
                <span className="blue-color fw-bold ms-2">(75)</span>
              </div>
            </td>
            <td>
              <div>
                Hummus
                <span className="blue-color fw-bold ms-2">(50)</span>
              </div>
              <div>
                Baby carrots
                <span className="blue-color fw-bold ms-2">(35)</span>
              </div>
              <div>
                Crackers
                <span className="blue-color fw-bold ms-2">(65)</span>
              </div>
            </td>
          </tr>
          <tr className="fw-bold light-gray-bg">
            <td>Total</td>
            <td>450 Calories</td>
            <td>550 Calories</td>
            <td>685 Calories</td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>
              <div>
                Grilled chicken
                <span className="blue-color fw-bold ms-2">(200)</span>
              </div>
              <div>
                Brussel sprouts
                <span className="blue-color fw-bold ms-2">(100)</span>
              </div>
              <div>
                Quinoa
                <span className="blue-color fw-bold ms-2">(105)</span>
              </div>
            </td>
            <td>
              <div>
                Steak
                <span className="blue-color fw-bold ms-2">(375)</span>
              </div>
              <div>
                Mashed potatos
                <span className="blue-color fw-bold ms-2">(150)</span>
              </div>
              <div>
                Asparagus
                <span className="blue-color fw-bold ms-2">(75)</span>
              </div>
            </td>
            <td>
              <div>
                Grilled salmon
                <span className="blue-color fw-bold ms-2">(225)</span>
              </div>
              <div>
                Brown rice
                <span className="blue-color fw-bold ms-2">(175)</span>
              </div>
              <div>
                Green beans
                <span className="blue-color fw-bold ms-2">(100)</span>
              </div>
              <div>
                Walnuts
                <span className="blue-color fw-bold ms-2">(165)</span>
              </div>
            </td>
          </tr>
          <tr className="fw-bold light-gray-bg">
            <td>Total</td>
            <td>405 Calories</td>
            <td>600 Calories</td>
            <td>665 Calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanList;
