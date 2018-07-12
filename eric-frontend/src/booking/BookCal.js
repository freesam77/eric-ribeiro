import React, { Component } from 'react';
import BookInfo from './BookInfo';
import Calendar from 'react-calendar-material';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import {Collapse, Jumbotron, Button} from 'reactstrap';


class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      day: this.day,
      month: this.month,
      year: this.year,
      duration: this.duration,
      timeslots: ["Timeslot 1","Timeslot 2"],
      collapse: false
    }

    // binding "this" so the property won't be lost when passed
    this.changeBooking = this.changeBooking.bind(this);
    this.toggle = this.toggle.bind(this)
  }


  toggle() {
    // this.setState({ collapse: !this.state.collapse });
    this.setState({ collapse: true });
  }

  changeBooking (day,month,year,duration) {
    this.setState({
      day: day,
      month: month,
      year: year,
      duration:duration,
      //timeslots: ["time1","time2","time3"]
      
     })

    // to see the data that has been passed....
      console.log("the state has been changed to:")
      console.log(day)
      console.log(month)
      console.log(year)
      console.log(duration)
     //console.log(timeslots)
      
  }

  render() {
       let arr = ["time1","time2","time3"]
    return (
      <div>
    <NavComponent />
    <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>
    <Calendar
      accentColor={'blue'}
      orientation={'flex-col'}
      showHeader={false}
      onDatePicked={(d) => {
        var date = new Date(d);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var duration= 7;
        
        this.toggle;
        this.changeBooking(day,month,year,duration);
        
    }}/>
    </Button>

    
    <Collapse isOpen={this.state.collapse}>
        <BookInfo
        day={this.state.day}
        month={this.state.month}
        year={this.state.year}
        timeslots={this.state.timeslots}
        duration = {this.state.duration}
        
        />

    </Collapse>
      
     </div>
    );
  }
}



export default BookCal;