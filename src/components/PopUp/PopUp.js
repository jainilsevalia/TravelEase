import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrip } from "../../redux/Trip.reducers";
import { Button, InputField } from "..";
import "../PopUp/PopUp.styles.css";
import TextArea from "../TextArea/TextArea";

const PopUp = (props) => {
  const tripDetails = useSelector((store) => store.tripDetails);
  const newTripId = tripDetails.length + 1;

  const initialValues = {
    tripId: newTripId,
    tripName: "",
    tripDescription: "",
    tripDate: "",
    initialBudget: "",
    totalExpense: 0,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const tripInfo = useSelector((store) => store.tripDetails);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addTrip(formValues));
    console.log(tripInfo);
    setFormValues(initialValues);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-button-close">
          <div className="">
            <span className="card-trip-title__popup">New Trip</span>
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
            handleChange={handleChange}
          />
          <TextArea
            label="Trip Description"
            id="Trip Description"
            type="text"
            name="tripDescription"
            handleChange={handleChange}
          />
          <InputField
            label="Intial Budget"
            id="Intial Budget"
            type="text"
            name="initialBudget"
            handleChange={handleChange}
          />
          <InputField
            label="Date"
            id="Date"
            type="text"
            name="tripDate"
            handleChange={handleChange}
          />
        </div>
        <div className="popup-save-button">
          <Button
            variant="blue"
            name="Save"
            onClick={() => {
              props.setTrigger(false);
              handleSave();
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
