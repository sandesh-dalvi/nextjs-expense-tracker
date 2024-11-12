import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addComas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${addComas(Number(income?.toFixed(2)))}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">$-{addComas(Number(expense?.toFixed(2)))}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
