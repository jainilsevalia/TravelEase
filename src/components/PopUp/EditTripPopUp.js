import React, { useEffect, useState } from "react";
import { Button, InputField } from "..";
import "./EditTripPopUp.styles.css";
import TextArea from "../TextArea/TextArea";
import { axios } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { tripAdded } from "../../redux/addTrip.reducers";
import { toast } from "react-toastify";

const EditTripPopUp = (props) => {
  const dispatch = useDispatch();

  const initialValues = {
    tripName: "",
    tripDescription: "",
    tripDate: "",
    initialBudget: "",
    totalExpense: 0,
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

  useEffect(() => {
    try {
      axios.get(`/trip/get/${props.selectedTripCard}`).then((response) => {
        setFormValues(response.data.trip);
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
  }, []);

  const handleSave = () => {
    setFormErrors(validate(formValues));
    setErrorCheck(true);
    if (Object.keys(formErrors).length === 0) {
      props.setTrigger(false);
      try {
        axios
          .patch(`/trip/update/${props.selectedTripCard}`, {
            // TODO: Remove user ID
            userId: "64147ef19c2f3ba112246a4f",
            tripName: formValues.tripName,
            tripDescription: formValues.tripDescription,
            tripDate: formValues.tripDate,
            initialBudget: formValues.initialBudget,
          })
          .then((response) => {
            if (response.data.success) {
              setFormValues(initialValues);
              dispatch(tripAdded(response.data.updateTrip._id));
              setFormErrors(initialValues);
              setErrorCheck(false);
              toast.success("Trip Edited successfully!!", {
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
    }
  };

  const validate = (values) => {
    const errors = {};
    const numRegex = /^[0-9]*$/i;
    const dateRegex =
      /^((0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(202[0-9]))$/i;

    if (!values.tripDate) {
      errors.tripDate = "Trip Date is required!";
    } else if (!dateRegex.test(values.tripDate)) {
      errors.tripDate = "Please enter a valid date in a DD/MM/YYYY ";
    }
    if (!values.tripDescription) {
      errors.tripDescription = "Description of Trip is required!";
    }
    if (!values.tripName) {
      errors.tripName = "Name of Trip is required!";
    }
    if (!values.initialBudget) {
      errors.initialBudget = "Estimated Expanses Details is required!";
    } else if (!numRegex.test(values.initialBudget)) {
      errors.initialBudget = "Expense doesn't contains alaphabets";
    }
    return errors;
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-button-close">
          <div className="">
            <span className="card-trip-title__popup">Update Trip</span>
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
            label="Trip Name"
            id="Trip Name"
            type="text"
            name="tripName"
            value={formValues.tripName}
            handleChange={handleChange}
            error={formErrors.tripName}
          />
          <TextArea
            label="Trip Description"
            id="Trip Description"
            type="text"
            name="tripDescription"
            value={formValues.tripDescription}
            handleChange={handleChange}
            error={formErrors.tripDescription}
          />
          <InputField
            label="Intial Budget"
            id="Intial Budget"
            type="text"
            name="initialBudget"
            value={formValues.initialBudget}
            handleChange={handleChange}
            error={formErrors.initialBudget}
          />
          <InputField
            label="Date"
            id="Date"
            type="text"
            name="tripDate"
            value={formValues.tripDate}
            handleChange={handleChange}
            error={formErrors.tripDate}
          />
        </div>
        <div className="popup-save-button">
          <Button variant="blue" name="Save" onClick={handleSave} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default EditTripPopUp;
