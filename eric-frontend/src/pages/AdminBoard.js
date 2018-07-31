import React from "react";
import "../styles/AdminBoard.css";
import DayList from "../components/DayList";
import Form from "../components/Form";
import Board from "../components/Board";

const url = 'https://calendar-booking-api.herokuapp.com'

export default class AdminBoard extends React.Component {

  state = {
    count: '',
    //days: [],
    shouldHide: Boolean,
    orders: []
  }

    handleLogout = event => {
      localStorage.removeItem('token');
     window.location.reload()

     const tk = Object.assign({}, this.state, {
        token: false

      })
     return this.setState(tk)

   };
 
    componentDidMount() {
      const token = localStorage.getItem('token');
      
      if (token != null) { this.setState({shouldHide: false}) }

      console.log('token', token) 
      fetch('http://localhost:8081/orders')
      .then(resp => resp.json())
      .then((data) => {
        this.setState({orders:data})
      }, )
      .catch(err => console.log("Wrong urls",err))
    }

  render() {
        //console.log(this.state.orders)
    return (
      <div key={this.board} className='board'>
        <div className={this.state.shouldHide ? 'login' : "hidden"}>
          <Board key={this.admin}/>
        </div>
        <div className={this.state.shouldHide ? 'hidden' : "board"}>
          <div className='logout'>
            <button bssize="large" type="button" onClick={this.handleLogout}>Logout</button>
          </div>
          <br />
          <div className={this.state.shouldHide ? 'hidden' : "Form"}>
            <br />
            <Form key={this.form}/>
            <br />
            <DayList key={this.order} days={this.state.orders} />
          </div>
        </div>
      </div>
  
    );
  }
}
