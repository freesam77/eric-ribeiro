import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import Services from './pages/Services';
import AdminBoard from './pages/AdminBoard';
import Reset from './components/Reset';
import Forgot from './components/Forgot';
import SignUpForm from './components/SignUpForm';
import NoMatch from './components/NoMatch';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      
    }
  }

  componentDidMount() {
    fetch('http://localhost:8081/services')
    .then(resp => resp.json())
    .then((data) => {
      this.setState({orders:data.services})
    }, )
   .catch(err => console.log("Wrong urls",err))

  }

  render() {
  
    return (
      <Router>
        <div className="app">
          <NavComponent />

          <main className="mainWindow">
            <Switch>
              <Route exact path='/' component={CarouselComponent} />
              <Route exact path='/about' component={About} />
              <Route exact path='/admin' component={AdminBoard} />
              <Route exact path='/reset' component={Reset} />

              <Route exact path='/forgot' component={Forgot} />

              <Route exact path='/signup' component={SignUpForm} />
              <Route path='/service' render={
                  () => <Services orders={this.state.orders} />
                }/>
              
              <Route component={NoMatch} />
            </Switch>
          </main>
          <FooterComponent />

          </div>
      </Router>
    );
  }
}

export default App;

