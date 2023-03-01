import React, { useState, useEffect, useRef } from "react";
import "../Manage Expense/ManageExpenses.styles.css";
import Transaction from "../../layouts/TransactionDetails/Transaction";
import TripCard from "../../layouts/TripCardME/TripCardME";
import TripExpenseDetails from "../../layouts/TripExpenseDetails/TripExpenseDetails";
import { Button, Popup } from "../../components";
import AddExpensePopUp from "../../components/AddExpensePopUp/AddExpensePopUp";
import { useSelector, useDispatch } from "react-redux";
import { selectedTripCard } from "../../redux/sample.reducers";
const ManageExpense = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupVisibleForAddExpense, setPopupVisibleForAddExpense] =
    useState(false);
  const [tripId, setTripId] = useState(1);

  const myRef = useRef(null);
  const [ref, setRef] = useState(false);

  const tripInfo = useSelector((store) => store.tripDetails);
  const transactionInfo = useSelector((store) => store.transaction);

  const dispatch = useDispatch();

  const handleTripClick = (idSelected) => {
    setTripId(idSelected);
    setRef(true);
    dispatch(selectedTripCard(idSelected));
    console.log(document.querySelector(".left-container-trip-list").classList);
  };

  useEffect(() => {
    if (ref === true) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
      setRef(false);
    }
  }, [ref]);

  const handlePopup = () => {
    setPopupVisible(true);
  };
  const handleExpensePopUp = () => {
    setPopupVisibleForAddExpense(true);
  };
  return (
    <>
      <div className="expense-main-container">
        <div className="expense-left-container-trip-list">
          <div className="expense-left-container__title-bar">
            <span className="expense-left-container-title-bar__title">
              Manage Expenses
            </span>
            <Button variant="blue" name="+ New Trip" onClick={handlePopup} />
            <Popup trigger={popupVisible} setTrigger={setPopupVisible}></Popup>
          </div>
          <div className="expense-left-container__trip-list">
            {tripInfo.map((trip) => (
              <div onClick={() => handleTripClick(trip.tripId)}>
                <TripCard
                  props={{
                    title: `${trip.tripName}`,
                    date: `${trip.tripDate}`,
                    tripDescription: `${trip.tripDescription}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div ref={myRef} className="expense-right-container">
          <div>
            <div>
              <div className="expense-right-container__title-bar">
                <div className="expense-right-container-title-bar__title">
                  <span>{tripInfo[tripId - 1].tripName}</span>
                </div>
                <div className="expesnse-right-container-title-bar__date">
                  <span>{tripInfo[tripId - 1].tripDate}</span>
                </div>
              </div>
              <div className="expense-right-container__description">
                <TripExpenseDetails
                  props={{
                    detailedDescription: `${
                      tripInfo[tripId - 1].tripDescription
                    }`,
                    initialBudget: `$ ${tripInfo[tripId - 1].initialBudget}`,
                    totalExpense: `$ ${tripInfo[tripId - 1].totalExpense}`,
                  }}
                />
              </div>
              <div className="expense-transaction-title-bar">
                <div className="expense-transaction-title">
                  <span>Transactions</span>
                </div>
                <div className="expense-transaction-button">
                  <Button
                    variant="transparent"
                    name="+ Add Expense"
                    onClick={handleExpensePopUp}
                  />
                  <AddExpensePopUp
                    selectedTripCard={tripId}
                    trigger={popupVisibleForAddExpense}
                    setTrigger={setPopupVisibleForAddExpense}
                  ></AddExpensePopUp>
                </div>
              </div>
              <div className="expense-right-container__transaction">
                {transactionInfo.map((transaction) => {
                  return transaction.tripId === tripId ? (
                    <Transaction
                      props={{
                        transactionName: `${transaction.transactionName}`,
                        transactionId: `${transaction.transactionId}`,
                        transactionAmount: `$ ${transaction.transactionAmount}`,
                      }}
                    />
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageExpense;
