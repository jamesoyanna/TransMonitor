import React, { Component } from "react";
import { getTransactions } from "../../data/transactionDetails";
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
              <th>transaction No</th>
              <th>Time</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr key={transaction._id}>
                <td>{transaction.title}</td>
                <td>{transaction.price.name}</td>
                <td>{transaction.transactionNo}</td>
                <td>{transaction.Time}</td>

                <td>
                  <button className="btn btn-sm btn">pending</button>
                </td>
                <td>
                 
                 
                    liked={transaction.liked}
                    onClick={() => this.handleLike(transaction)}
                  />
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
