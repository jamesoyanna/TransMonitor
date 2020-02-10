import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import  DefaultLayout from "../src/layouts/Default";

// Route Views
import TransactionOverview from "./views/TransactionOverview";
import UserProfile from "./views/UserProfile";
import AddTransaction from "./views/AddTransaction";
import ComponentsOverview from "./views/AddTransaction";
import TransactionTable from "./views/TransactionTable";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/trans-overview" />
  },
  {
    path: "/trans-overview",
    layout: DefaultLayout,
    component: TransactionOverview
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
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/transaction-table",
    layout: DefaultLayout,
    component: TransactionTable
  }
 
];
