  //import React from 'react';
import '../styles/Services.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch,Redirect,Link } from 'react-router-dom';
import React from 'react'
import BookCal from './BookCal';

class Services extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      service: [],
      redirect:false
     
    }
  }

  catchState(f){
    return new Promise(function(resolve) {
      setTimeout(resolve, f);
  });
  }

  singleOrder(f){

    this.catchState(f)
    .then(this.setState({service:f.item}))
    .then(this.setState({redirect: true}))
    
    .catch((error) => {
      console.log(error)
    })
  }

  render(){
    if (this.state.redirect === true) {

      return <BookCal service = {this.state.service} />
    }
    return(
      <Router>
        <div>
          <Switch>
            <Route path='/book' render={
                    () => <BookCal service = {this.state.service} />
                }/>

            <Route path='/service' render={() => (
              <ul>
              {this.props.orders.map((item, index)=> {
                return(
                  <div className = "card" key = {index} >
                    <Card>  
                      <CardBody >
                        
                        <CardImg width="100%" src={item.image} alt="Card image cap" />
                        <hr/>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle className="cardsubtitle">Duration: {item.duration} hours | Price: ${item.price}</CardSubtitle>
                        <CardText className="cardtext">{item.description}</CardText>
                        <Button onClick={f => this.singleOrder({item})}  >Book Now</Button>
                      </CardBody>
                    </Card>
                  </div>
                )
              })
            }
            </ul>
            )} />
          </Switch>
        </div>
      </Router>
   )
  }
}
export default Services