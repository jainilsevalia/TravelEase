import React, { useState, useEffect } from "react";
import "./CreatePlan.css";
import "../../../components/Navbar/Navbar";
import { InputField } from "../../../components";
import TextArea from "../../../components/TextArea/TextArea";
import { Button } from "../../../components";
import {useDispatch} from "react-redux";
import {addPlanData} from "../../../redux/plandata.reducers";
import { useNavigate } from 'react-router-dom';

function Plan(){
  const initialValues = { firstname: "", lastname:"",email: "", startdate: "", enddate: "", destination:"" ,expense_details: "", description: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    if(Object.keys(formErrors).length === 0 && formValues.firstname !== "" && formValues.lastname !== "" && formValues.email !== "" && formValues.startdate !== "" && formValues.enddate !== "" &&  formValues.destination !== "" && formValues.expense_details !== "" && formValues.description !==""){
      dispatch(addPlanData(formValues));
      setIsSubmit(true);
    }

  };

    useEffect(()=>{ 
      if(isSubmit){
        navigate("/plan");
      }
    },[isSubmit,navigate]);
 

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameregex = /^[a-z ,.'-]+$/i;
    const numRegex = /^[0-9]*$/i;
    const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/i;

    if (values.firstname === "") {
      errors.firstname = "Firstname is required!";
    }else if (!nameregex.test(values.firstname)) {
      errors.firstname = "Firstame doesn't contain numbers";
    }

    if (values.lastname === "") {
      errors.lastname = "Lastname is required!";
    }else if (!nameregex.test(values.lastname)) {
      errors.lastname = "Lastname doesn't contain numbers";
    }


    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email format!";
    }

    if (!values.startdate) {
      errors.startdate = "Start Date is required!";
    }else if(!dateRegex.test(values.startdate)){
      errors.startdate = "Please enter a date in a format shown above"
    }

    if (!values.enddate) {
      errors.enddate = "End Date is required!";
    }else if(!dateRegex.test(values.enddate)){
      errors.enddate = "Please enter a date in a format shown above"
    }

    if (values.startdate > values.enddate) {
      errors.enddate = "End Date cannot be less than Start Date!";
    }

    if (values.destination === "") {
      errors.destination = "Destination is required!";
    }else if (!nameregex.test(values.destination)) {
      errors.destination = "Destination doesn't contain numbers";
    }

    if (!values.expense_details) {
      errors.expense_details = "Estimated Expanses Details is required!";
    }else if(!numRegex.test(values.expense_details)){
      errors.expense_details = "Expense doesn't contains alaphabets";
    }

    if (!values.description) {
      errors.description = "Description of Travel is required!";
    }
    return errors;
  };

  return (
    <>

     {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Plan Posted!</div>
      ) : (
        null
      )} */}

    <div className="page-container">
    <div className="form">
     <form onSubmit={handleSubmit}>
        <div className="title">PostPlan</div>
        <div className="input-container ic2">

            {/* <input
              type="text"
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
              className="input"
            />
            <label for="firstname" className="placeholder">Firstname</label>         */}
            <InputField
              type="text"
              name="firstname"
              id="firstname"
              value={formValues.firstname}
              handleChange={handleChange}
              label="Firstname"
            />
        </div>
        <p className="error">{formErrors.firstname}</p>

        <div className="input-container ic2">
            {/* <input
              type="text"
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
              className="input"
            />
            <label for="lastname" className="placeholder">Lastname</label> */}
            <InputField
              type="text"
              name="lastname"
              value={formValues.lastname}
              handleChange={handleChange}
              label="Lastname"
            />
        </div>
        <p className="error">{formErrors.lastname}</p>

        <div className="input-container ic2">
            {/* <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="input"
            />
            <label for="email" className="placeholder">Email</label> */}
            <InputField
               type="text"
               name="email"
               value={formValues.email}
               handleChange={handleChange}
               label="Email"
            />
        </div>
        <p className="error">{formErrors.email}</p>

        <div className="input-container ic2">
            {/* <input
              type="date"
              name="startdate"
              value={formValues.startdate}
              onChange={handleChange}
              className="input"
            />
            <label for="startdate" className="placeholder">Start Date</label> */}
            <InputField
               type="text"
               name="startdate"
               value={formValues.startdate}
               handleChange={handleChange}
               label="Startdate"
               info="dd/mm/yyyy"
            />
            <p className="error">{formErrors.startdate}</p>
        </div>

        <div className="input-container ic2">
            {/* <input
              type="date"
              name="enddate"
              value={formValues.enddate}
              onChange={handleChange}
              className="input"
            />
            <label for="enddate" className="placeholder">End Date</label> */}
            <InputField
              type="text"
              name="enddate"
              value={formValues.enddate}
              handleChange={handleChange}
              label="Enddate"
              info="dd/mm/yyyy"
            />
        </div>
        <p className="error">{formErrors.enddate}</p>

        <div className="input-container ic2">
            {/* <input
              type="text"
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
              className="input"
            />
            <label for="lastname" className="placeholder">Lastname</label> */}
            <InputField
              type="text"
              name="destination"
              value={formValues.destination}
              handleChange={handleChange}
              label="destination"
            />
        </div>
        <p className="error">{formErrors.destination}</p>

        <div className="input-container ic2">
            {/* <input
              type="text"
              name="expense_details"
              value={formValues.expense_details}
              onChange={handleChange}
              className="input"
            />
            <label for="expense_details" className="placeholder">Estimated Expanse</label> */}
            <InputField
              type="text"
              name="expense_details"
              value={formValues.expense_details}
              handleChange={handleChange}
              label="Estimated Expense"
            />
        </div>
        <p className="error">{formErrors.expense_details}</p>

        <div className="input-container ic2">
            {/* <textarea
              rows={2}
              name="description"
              value={formValues.description}
              onChange={handleChange}
              className="input"
            />
            <label for="description" className="placeholder">Travel Description</label> */}
            <TextArea
              row={2}
              name="description"
              value={formValues.description}
              handleChange={handleChange}
              label="Travel Description"
            />
        </div>
        <p className="error">{formErrors.description}</p>

        <div className="feed_container-latest_trip_div-button">
					
						<Button
							variant="blue"
							name="Post this Plan"
						/>
					
				</div>

      </form>

      {/* <Button
					className="feed_container-latest_trip_div-button"
					props={{ variant: "blue", name: "SEE ALL EXPENSES" }}/> */}
		
    </div>
    
   
    {/* {isSubmit ? (
    <div className="plans">
        <div className="card">
        <div for="description" className="destination">{formValues.destination}</div>
          <div className="dateandexpense">
            <div className="dates">{formValues.startdate} - {formValues.enddate}</div>
            <div className="expense">${formValues.expense_details}</div>
          </div>
          <p className="pt-2">
            {formValues.description}
          </p>
          <div className="customize">
            <div className="update"><MdEditNote/></div>
            <div className="delete"><MdDeleteOutline/></div>
          </div>
        </div>
    </div>) : (null )} */}
    </div>   

    </>
  );
}

export default Plan;