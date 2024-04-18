import React from "react";

export default function customerList({ customers }) {
  return (
    <div>
      <hr style={{ marginTop: "30px" }} />
      <h2>Our Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer}>{customer}</li>
        ))}
      </ul>
    </div>
  );
}
