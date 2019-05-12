import React from 'react';
import {
  BrowserRouter,Route,Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { connect } from 'react-redux';

import Navigation from './Components/Navigation';
import Home from './Containers/Home';
import Venue from './Containers/Venue';
import Notfound from './Containers/Notfound';
import Footer from './Components/Footer';



class App extends React.Component {
  
  render(){
    
    let lang = this.props.lang
    return (
      <BrowserRouter>
       <div className="App">
        <Navigation />
        
          <Switch>
            <Route exact path="/" component={() => <Home lang={lang} location="home"/>} />
            <Route path="/venue" component={() => <Venue lang={lang} location="venue"/>} />
            <Route path="/registration"  component={Notfound} />
            <Route component={Notfound} />
          </Switch>
          <Footer/>
       </div>
        
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return{
    lang: state.Reducers.lang
  }
}

export default connect(mapStateToProps)(App);
