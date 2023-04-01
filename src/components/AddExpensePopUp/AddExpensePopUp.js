import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/ButtonComp";
import InputField from "../InputField/InputField";
import "../AddExpensePopUp/AddExpensePopUp.styles.css";
import { addTransaction } from "../../redux/Transaction.reducer";
import { axios } from "../../utils/axios";
import { expenseAdded } from "../../redux/expenseAdded.reducer";
import { toast } from "react-toastify";

const AddExpensePopUp = (props) => {
  const selectedTripId = useSelector((store) => store.sample);
  const [wantToPay, setWantToPay] = useState(false);
  const [currentExpenseId, setCurrentExpenseId] = useState("");
  const initialValues = {
    tripId: selectedTripId.tripIdSelected,
    transactionName: "",
    transactionAmount: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [errorCheck, setErrorCheck] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (errorCheck) {
      setFormErrors(validate(formValues));
    }
  }, [errorCheck, formValues]);

  const handlePayExpense = () => {
    setFormErrors(validate(formValues));
    setErrorCheck(true);
    if (Object.keys(formErrors).length === 0) {
      props.setTrigger(false);
      axios
        .post("/expense/add", {
          tripId: selectedTripId.tripIdSelected,
          transactionName: formValues.transactionName,
          transactionAmount: formValues.transactionAmount,
        })
        .then((response) => {
          if (response.data.success) {
            dispatch(expenseAdded(response.data.expense._id));
            setWantToPay(true);
            setCurrentExpenseId(response.data.expense._id);
            setFormValues(initialValues);
            setFormErrors(initialValues);
            setErrorCheck(false);
            toast.success("Expense added successfully!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Something went wrong!! Try again!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
      dispatch(addTransaction(formValues));
      setFormValues(initialValues);
    }
  };

  const validate = (values) => {
    const errors = {};
    const numRegex = /^[0-9]*$/i;
    if (!values.transactionName) {
      errors.transactionName = "Name of Transaction is required!";
    }
    if (!values.transactionAmount) {
      errors.transactionAmount = "Estimated Expenses Amount is required!";
    } else if (!numRegex.test(values.transactionAmount)) {
      errors.transactionAmount = "Expense sholudn't contains alaphabets.";
    }
    return errors;
  };

  useEffect(() => {
    try {
      if (wantToPay) {
        axios
          .post("/expense/pay", {
            expenseId: currentExpenseId,
          })
          .then((response) => {
            console.log(response.data.sessionUrl);
            window.location = response.data.sessionUrl;
            setWantToPay(false);
            toast.success("Expense added successfully!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      }
    } catch (err) {
      toast.error("Something went wrong!! Try again!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [wantToPay, currentExpenseId]);

  const dispatch = useDispatch();

  const handleTransactionSave = () => {
    setFormErrors(validate(formValues));
    setErrorCheck(true);
    if (Object.keys(formErrors).length === 0) {
      props.setTrigger(false);
      axios
        .post("/expense/add", {
          tripId: selectedTripId.tripIdSelected,
          transactionName: formValues.transactionName,
          transactionAmount: formValues.transactionAmount,
        })
        .then((response) => {
          if (response.data.success) {
            dispatch(expenseAdded(response.data.expense._id));
            setFormValues(initialValues);
            setFormErrors(initialValues);
            setErrorCheck(false);
            toast.success("Expense added successfully!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Something went wrong!! Try again!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-button-close">
          <div className="">
            <span className="card-trip-title__popup">New Expense</span>
          </div>
          <Button
            className="close-btn dynamic-button"
            variant="transparent"
            name="Close"
            onClick={() => {
              props.setTrigger(false);
              setFormValues(initialValues);
              setFormErrors(initialValues);
              setErrorCheck(false);
            }}
          />
        </div>
        <div className="popup-input-list">
          <InputField
            label="Expense Name"
            id="Expense Name"
            type="text"
            name="transactionName"
            handleChange={handleChange}
            error={formErrors.transactionName}
          />
          <InputField
            label="Expense Amount"
            id="Expense Amount"
            type="text"
            name="transactionAmount"
            handleChange={handleChange}
            error={formErrors.transactionAmount}
          />
        </div>
        <div className="popup-save-button">
          <Button variant="blue" name="Save" onClick={handleTransactionSave} />
          <Button variant="blue" name="Pay" onClick={handlePayExpense} />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddExpensePopUp;
