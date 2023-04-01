import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, InputField } from "..";
import "./EditExpensePopUp.styles.css";
import { axios } from "../../utils/axios";
import { expenseAdded } from "../../redux/expenseAdded.reducer";
import { toast } from "react-toastify";

const EditExpensePopUp = (props) => {
  const dispatch = useDispatch();

  const initialValues = {
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

  const handleTransactionSave = () => {
    setFormErrors(validate(formValues));
    setErrorCheck(true);
    if (Object.keys(formErrors).length === 0) {
      props.setTrigger(false);
      axios
        .patch(`/expense/update/${props.transactionId}`, {
          transactionName: formValues.transactionName,
          transactionAmount: formValues.transactionAmount,
        })
        .then((response) => {
          if (response.data.success) {
            dispatch(expenseAdded(response.data.updatedExpense._id));
            setFormErrors(initialValues);
            setErrorCheck(false);
            toast.success("Expense Edited successfully!!", {
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
  const validate = (values) => {
    console.log(values);
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
      axios.get(`/expense/get/${props.transactionId}`).then((response) => {
        if (response.data.success) {
          setFormValues({
            transactionName: response.data.expense.transactionName,
            transactionAmount: response.data.expense.transactionAmount,
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
  }, [props.transactionId]);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-button-close">
          <div className="">
            <span className="card-trip-title__popup">Edit Expense</span>
          </div>
          <Button
            className="close-btn dynamic-button"
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
            value={formValues.transactionName}
            handleChange={handleChange}
            error={formErrors.transactionName}
          />
          <InputField
            label="Expense Amount"
            id="Expense Amount"
            type="text"
            name="transactionAmount"
            value={formValues.transactionAmount}
            handleChange={handleChange}
            error={formErrors.transactionAmount}
          />
        </div>
        <div className="popup-save-button">
          <Button variant="blue" name="Save" onClick={handleTransactionSave} />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default EditExpensePopUp;
