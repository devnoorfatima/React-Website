import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavItem} from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Introduction from './Components/introduction'
import Work from './Components/work'
import Contact from './Components/contact'
import '../src/styles/home.css';
import * as serviceWorker from './serviceWorker';
const routing = (
  <Router>
 <Navbar className='bg-dark text-white p-3 font sticky-top'>
         <Navbar.Brand className='text-white' href="/">Amazed</Navbar.Brand>
          <Navbar.Collapse>
        <Nav className='ml-auto'>
        <NavItem eventkey={1} href="/">
        <Nav.Link className='text-white' href="/">Home</Nav.Link>
        </NavItem>
        <NavItem eventkey={2} href="/work">
        <Nav.Link className='text-white' href="/work">Work</Nav.Link>
        </NavItem>
        <NavItem eventkey={3} href="/contact">
        <Nav.Link className='text-white' href="/contact">Contact</Nav.Link>
        </NavItem>
        </Nav>

        </Navbar.Collapse>
        </Navbar>
          <Switch>
         <Route exact path='/' component={Introduction} />
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
