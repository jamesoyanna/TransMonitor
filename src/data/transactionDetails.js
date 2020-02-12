
const transactions = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    ItemType: "Apple MacBook 15 250 SSD 12GB",
    price: { _id: "5b21ca3eeb7f6fbccd471818", name: "$73430" },
    TransactionNo: 1234567890,
    Time: "12:30",
    status: "button-pending"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    ItemType: "Apple MacBook 15 250 SSD 12GB",
    price: { _id: "5b21ca3eeb7f6fbccd471818", name: "$73430" },
    TransactionNo: 1234567890,
    Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    ItemType: "Apple MacBook 15 250 SSD 12GB",
      price: { _id: "5b21ca3eeb7f6fbccd471820", name: "$73430" },
    TransactionNo: 1234567890,
   Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    ItemType: "Apple MacBook 15 250 SSD 12GB",
    price: { _id: "5b21ca3eeb7f6fbccd471814", name: "$73430" },
    TransactionNo: 1234567890,
    Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    ItemType: "Apple MacBook 15 250 SSD 12GB",
   price: { _id: "5b21ca3eeb7f6fbccd471814", name: "$73430" },
   TransactionNo: 1234567890,
     Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
  ItemType: "Apple MacBook 15 250 SSD 12GB",
      price: { _id: "5b21ca3eeb7f6fbccd471814", name: "$73430" },
   TransactionNo: 1234567890,
     Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
   ItemType: "Apple MacBook 15 250 SSD 12GB",
   price: { _id: "5b21ca3eeb7f6fbccd471820", name: "$73430" },
    TransactionNo: 1234567890,
    Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    ItemType: "Apple MacBook 15 250 SSD 12GB",
     price: { _id: "5b21ca3eeb7f6fbccd471820", name: "$73430" },
    TransactionNo: 1234567890,
     Time: "12:30"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
   ItemType: "Apple MacBook 15 250 SSD 12GB",
       price: { _id: "5b21ca3eeb7f6fbccd471818", name: "$73430" },
   TransactionNo: 1234567890,
   Time: "12:30"
  }
];

export function getTransactions() {
  return transactions;
}

export function getTransaction(id) {
  return transactions.find(m => m._id === id);
}




