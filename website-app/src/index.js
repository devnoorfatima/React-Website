import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavItem} from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Components/home'
import Work from './Components/work'
import Contact from './Components/contact'
import * as serviceWorker from './serviceWorker';
const routing = (
  <Router>
 <Navbar>
         <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse>
         <Nav className="mr-auto">
         <NavItem eventkey={1} href="/">
        <Nav.Link href="/">Home</Nav.Link>
        </NavItem>
        <NavItem eventkey={1} href="/">
        <Nav.Link href="/work">Work</Nav.Link>
        </NavItem>
        <NavItem eventkey={1} href="/">
        <Nav.Link href="/contact">Contact</Nav.Link>
        </NavItem>
        
       
        
        </Nav>

        </Navbar.Collapse>
        </Navbar>
          <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/contact' component={Contact} />
         <Route path='/work' component={Work} />
        </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
