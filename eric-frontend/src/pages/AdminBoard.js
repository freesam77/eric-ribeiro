import React from "react";
<<<<<<< HEAD
import "./AdminBoard.css";
=======
import "../styles/AdminBoard.css";
>>>>>>> d47d4e5253c6d3986330dde6e7ee109d3f0be6fe
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
<<<<<<< HEAD
  
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
    
    //console.log('token', token) 
    
    // const token = this.state.token
    
    let config = {
      
      headers: { 'Access-Control-Allow-Origin': '*',
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token  },
    }      
    
    
    axios.get(url+'/dates', config)
    .then( response => {
      const newDays = response.data.days.map((day, i) => {
        return {
          _id: day._id,
          date: day.date,
          month: day.month,
          year: day.year,
          time: day.time.time,
          description: day.time.description,
          duration: day.time.duration
          
        };
      });
      
      const newState = Object.assign({}, this.state, {
        days: newDays
      });
      
      this.setState(newState);
    })
    
    .catch(error => console.log('BAD', error))
    
    fetch('http://localhost:8081/orders')
    .then(resp => resp.json())
    .then((data) => {
      this.setState({orders:data})
    }, )
    .catch(err => console.log("Wrong urls",err))
    
    
  }
  
  render() {
    console.log(this.state.orders)
    // console.log(this.state.order)
    return (
      
      
      
        
          
          
          <div key={this.board} className='board'>
          
          <div className={this.state.shouldHide ? 'login' : "hidden"}>
          <Board key={this.admin}/></div>
          
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
          <div>
          
          </div> 
          </div>
          <div>
          
          </div> 
          </div>
          
        );
      }
    }
=======

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
>>>>>>> d47d4e5253c6d3986330dde6e7ee109d3f0be6fe
