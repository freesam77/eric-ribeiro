import React from "react";
import "../styles/Day.css";
import axios from "axios";

function Day(props) {
    
  function onDelete() {
      const token = localStorage.getItem('token');
      const orderId = props._id; 
      let config = {
    
        headers: { 
          'Access-Control-Allow-Origin': '*', 
          'Content-Type':'application/json', 
          'Authorization':'Bearer '+token  
        },
      }
      axios.delete('./orders/'+orderId, config )
      .then(res => {
          window.alert('Deleted', res)
          return window.location.reload();      
      })
      .catch(Error)
  }

  return (
    <div >
      <table width = "70%" className ="table-display" border = "1px">
        <tr>
          <td>{props.name}</td>
          <td>{props.phoneNumber}</td>
          <td>{props.date}</td>
          <td>{props.productName}</td>
          <td>{props.time}</td>
          <td>{props.duration}</td>
          <td>{props.price}</td>
          <td><button onClick={onDelete} >Delete</button></td>        
        </tr> 
      </table>
    </div>
  );
}
export default Day;