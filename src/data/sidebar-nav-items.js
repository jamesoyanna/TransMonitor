export default function() {
  return [
    {
      title: "Overview",
      to: "/transaction-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "All Payments",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/transactions"
    },
    {
      title: "Reconcilled Payments",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-transaction"
    },
    {
      title: "Un-reconcilled payments",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview"
    },
    {
      title: "Manual settlement",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables"
    },
    {
      title: "All Orders",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile"
    },

    {
      title: "Merchant Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile"
    }
  ];
}
