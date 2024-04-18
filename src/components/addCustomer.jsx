import React, { useState } from 'react'

import CustomerList from './customerList'

export default function AddCustomer() {
  const [name, setName] = useState('');
  const [customers, setCustomers] = useState([]);

  function addCustomer() {
    if(name){
      setCustomers((prevState) => [...prevState, name]);
      console.log(customers);
      setName('')
    }
  }
  return (
    <div>
      <h2>Add customers to the list using Redux</h2>
      <input type='text'  onChange={(e) => setName(e.target.value)} style={{marginRight: '20px'}} value={name}/>
      <button onClick={addCustomer}>Add</button>
      <CustomerList customers={customers}/>
    </div>
  )
}