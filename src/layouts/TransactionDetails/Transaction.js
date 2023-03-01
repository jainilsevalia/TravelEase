import React from "react";
import IconComponent from "../../components/Icon/Icon";
import "../TransactionDetails/Transaction.styles.css";
const Transaction = ({ props }) => {
  return (
    <div className="transaction-details transaction-details__row container_transaction">
      <div className="transaction-details__col">
        <span className="transaction-details-col__name">
          {props.transactionName}
        </span>
        <span className="transaction-details-col__id">
          {props.transactionId}
        </span>
      </div>
      <div className="transaction-details__value">
        <span>{props.transactionAmount}</span>
      </div>
      <div className="transaction-details__icon">
        <div className="transaction-details-icon__edit">
          <IconComponent name="edit" />
        </div>
        <div className="transaction-details-icon__delete">
          <IconComponent name="delete" />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
