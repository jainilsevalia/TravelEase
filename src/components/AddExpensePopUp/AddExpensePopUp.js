import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, InputField } from "..";
import "../AddExpensePopUp/AddExpensePopUp.styles.css";
import { addTransaction } from "../../redux/Transaction.reducer";

const AddExpensePopUp = (props) => {
  const selectedTripId = useSelector((store) => store.sample);

  console.log(props.selectedTripCard);

  const initialValues = {
    tripId: selectedTripId.tripIdSelected,
    transactionId: "#856GkKJJ",
    transactionName: "",
    transactionAmount: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const dispatch = useDispatch();
  const transactionInfo = useSelector((store) => store.transaction);

  const handleTransactionSave = () => {
    console.log(formValues);
    dispatch(addTransaction(formValues));
    console.log(transactionInfo);
    setFormValues(initialValues);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-button-close">
          <div className="">
            <span className="card-trip-title__popup">New Expense</span>
          </div>
          <Button
            className="close-btn"
            variant="transparent"
            name="Close"
            onClick={() => props.setTrigger(false)}
          />
        </div>
        <div className="popup-input-list">
          <InputField
            label="Expense Name"
            id="Expense Name"
            type="text"
            name="transactionName"
            handleChange={handleChange}
          />
          <InputField
            label="Expense Amount"
            id="Expense Amount"
            type="text"
            name="transactionAmount"
            handleChange={handleChange}
          />
        </div>
        <div className="popup-save-button">
          <Button
            variant="blue"
            name="Save"
            onClick={() => {
              props.setTrigger(false);
              handleTransactionSave();
            }}
          />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddExpensePopUp;
