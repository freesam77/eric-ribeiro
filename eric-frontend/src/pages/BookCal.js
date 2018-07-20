import React, { Component } from 'react';
import Calendar from 'react-calendar-material';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import BookInfo from '../components/BookInfo';
import {Button, Collapse, Jumbotron} from 'reactstrap';

class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      dat: [
        { day: 5, month: 18, year:2017},  
      ],
      service: {}
    }
//console.log(day)
    
    this.onSubmit = this.onSubmit.bind(this)
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    console.log(this.state);
  }

  handleClick = () => {
    console.log(this.state.service);
  }

  toggle() {
    this.setState({ collapse: true });
  }

  selectBooking (day,month,year) {
    this.state = {dat: [
      {day: day,
      month: month,
      year: year,
      }
    ]
     }
     //console.log("Date changed..",this.state)
  }

  onSubmit = e => {
    console.log("Data received: ", e)
  }

  render() {
    // test assign new timeslots array
    //let newTimeslots = ["timeslot 1","timeslot 2","timeslot 3", "timeslot 4", "timeslot 5"]
       
    return (
      <div> 
        <NavComponent />
        {/* to revert to button style, use Button with color="link" */}
        <Jumbotron onClick={this.toggle} style={{ marginBottom: '1rem',textDecoration: 'none' }}>
          <Calendar
            accentColor={'blue'}
            orientation={'flex-col'}
            showHeader={false}
            
            onDatePicked={(d) => {
              let date = new Date(d);
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();
              
              //let duration = "duration punay";
              //const a = this.state.fetchData
              this.selectBooking(day,month,year);
              const url = 'http://localhost:8081/dates'
            
              fetch(`${url}/${day}/${month}/${year}`)
              .then(resp => resp.json())
              .then(json => this.setState({dat: json}))
              .catch(err => console.log("rong urls",err))
              const dat = this.state.dat
              console.log(dat)
            }
          }/>
        </Jumbotron>
        <Collapse isOpen={this.state.collapse}>
            <BookInfo
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            timeslots={this.state.timeslots}
            duration={this.state.duration}
            onSubmit={e => this.onSubmit(e)}
            />
        </Collapse>
        <Button onClick={this.handleClick}>Click me</Button>
        <FooterComponent/>
     </div>
    );
  }
}

export default BookCal;