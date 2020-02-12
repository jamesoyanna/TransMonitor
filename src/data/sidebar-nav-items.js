export default function() {
  return [
    {
      title: "Overview",
      to: "/transaction-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "All Payments",
      htmlBefore: '<i class="material-icons">account_balance_wallet</i>',
      to: "/transaction-table"
    },
    {
      title: "Reconcilled Payments",
      htmlBefore: '<i class="material-icons">account_balance_wallet</i>',
      to: "/add-transaction"
    },
    {
      title: "Un-reconcilled payments",
      htmlBefore: '<i class="material-icons">account_balance_wallet</i>',
      to: "/"
    },
    {
      title: "Manual settlement",
      htmlBefore: '<i class="material-icons">radio_button_checked</i>',
      to: "/"
    },
    {
      title: "All Orders",
      htmlBefore: '<i class="material-icons">description</i>',
      to: "/user-profile"
    },

    {
      title: "Pending Orders",
      htmlBefore: '<i class="material-icons">description</i>',
      to: "/"
    },

    {
      title: "reconcilled Orders",
      htmlBefore: '<i class="material-icons">description</i>',
      to: "/"
    },

    {
      title: "Merchant Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile"
    }
  ];
}
