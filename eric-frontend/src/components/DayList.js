import React from "react";
import Day from "./Day";
import {Row,Col,Table} from "reactstrap";

function DayList(props) {
  return (
    <div>
      <h1> Admin Board</h1>
<<<<<<< HEAD
    <Table>
  <tr>
    <th>Name</th>
    <th>PhoneNo.</th>
    <th>Date</th>
    <th>Product</th>
    <th>Time</th>
    <th>Duration</th>
    <th>Price</th>
    <th>fun</th>
    
  </tr>
  </Table>
=======
      <table width = "70%" className ="table-display" border = "1px">
        <tr>
          <th>Name</th>
          <th>PhoneNo.</th>
          <th>Date</th>
          <th>Product</th>
          <th>Time</th>
          <th>Duration</th>
          <th>Price</th>
          <th>fun</th>
          
        </tr>
      </table>
>>>>>>> d47d4e5253c6d3986330dde6e7ee109d3f0be6fe
      {
        props.days.map((day, d) => 
        <Day key={d} 
      
        _id={day._id} 
        name = {day.name}
        phoneNumber = {day.phoneNumber}
        date={day.date} 
        productName = {day.productName}
        time={day.time} 
        duration={day.duration} 
        price={day.price} />
      )}
      	
    </div> 
  ); 
} 

export default DayList;