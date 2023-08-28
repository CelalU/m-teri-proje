const moongose = require("mongoose");
const Schema = moongose.Schema;
const orders = [
  { name: "sinan", duration: 18, priority: 2 },
  { name: "celal", duration: 3, priority: 3 },
  { name: "deniz", duration: 55, priority: 1 },
];

orders.sort((a, b) => {
  if (a.priority !== b.priority) {
    return a.priority - b.priority;
  } else {
    return a.duration - b.duration;
  }
});

for (const order of orders) {
  console.log(
    `müşteri: ${order.name}, Süre: ${order.duration}, Öncelik: ${order.priority}`
  );
}
