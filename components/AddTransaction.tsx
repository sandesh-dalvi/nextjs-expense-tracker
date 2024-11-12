"use client";

import addTransaction from "@/app/actions/addTransaction";
import { useRef } from "react";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    // console.log(formData.get("text"), formData.get("amount"));

    const { data, error } = await addTransaction(formData);

    if (error) {
      //   alert(error);
      toast.error(error);
    } else {
      //   alert("Transaction added");
      //   console.log(data);
      toast.success("Transaction Added Successfully");
      formRef.current?.reset();
    }
  };

  return (
    <>
      <h3>Add Transaction</h3>

      <form action={clientAction} ref={formRef}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name="text" id="text" placeholder="Enter a Text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount (negative - expense , positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter a Amount"
            step="0.01"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
