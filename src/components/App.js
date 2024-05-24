import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import Support from '../pages/Support';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/about-us" className="text-white">About Us</Link></li>
            <li><Link to="/services" className="text-white">Services</Link></li>
            <li><Link to="/contact-us" className="text-white">Contact Us</Link></li>
            <li><Link to="/support" className="text-white">24/7 Support</Link></li>
          </ul>
        </nav>
        <div className="container mx-auto p-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/support" component={Support} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;