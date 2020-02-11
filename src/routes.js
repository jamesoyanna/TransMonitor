import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "../src/layouts";

// Route Views
import TransactionOverview from "../src/views/TransactionOverview";
import UserProfile from "../src/views/UserProfile";
import AddTransaction from "../src/views/AddTransaction";
import TransactionTable from "../src/views/TransactionTable";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/transaction-overview" />
  },
  {
    path: "/transaction-overview",
    layout: DefaultLayout,
    component: TransactionOverview
  },

  {
    path: "/transaction",
    layout: DefaultLayout,
    component: AddTransaction
  },

  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/add-transaction",
    layout: DefaultLayout,
    component: AddTransaction
  },

  {
    path: "/transaction-table",
    layout: DefaultLayout,
    component: TransactionTable
  }
];
