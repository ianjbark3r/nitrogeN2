import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import Footer from './Layout/Footer';
import Nav from './Layout/Nav';
import Home from './Pages/Home';
import ScheduleNow from './Pages/ScheduleNow';
import Services from './Pages/Services';
import WhyN2 from './Pages/WhyN2';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/schedule_now' component={ScheduleNow} />
          <Route path='/services' component={Services} />
          <Route path='/why_n2' component={WhyN2} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
