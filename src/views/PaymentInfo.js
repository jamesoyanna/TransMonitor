import React, { Component } from "react";
import { getTransactions } from "../data/transactionDetails";
//import Button from "../components/components-overview/Button";

class PaymentInfo extends Component {
  state = {
    transactions: getTransactions(),
    pageSize: 4
  };

  handleLike = transaction => {
    const transactions = [...this.state.transactions];
    const index = transactions.indexOf(transaction);
    transactions[index] = { ...transactions[index] };
    transactions[index].liked = !transactions[index].liked;
    this.setState({ transactions });
  };

  handlePageChange = page => {};

  render() {
    const { length: count } = this.state.transactions;

    return (
      <React.Fragment>
        <p>
          Showing {count} out of {500} payments{" "}
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Price</th>
              <th>transaction Number</th>
              <th>Time</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr key={transaction._id}>
                <td>{transaction.ItemType}</td>
                <td>{transaction.price.name}</td>
                <td>{transaction.TransactionNo}</td>
                <td>{transaction.Time}</td>

                <td>
                  <button
                    style={{
                      border: "1px solid",
                      borderRadius: 12,
                      width: 114,
                      height: 35,
                      color: "#009900"
                    }}
                    className="btn btn-sm btn"
                  >
                    &#x2688; Reconcilled
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default PaymentInfo;
