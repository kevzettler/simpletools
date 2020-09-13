import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import PeopleAlsoAsk from '../web/paa'
import About from '../web/about'


function Titles(props){
  return <p> {props.title}</p>;
}


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

<Router>
  <div className="nav">
  
    <div>
      <Navbar light expand="md">
      <Link to="/">
        <NavbarBrand>simpletools.io</NavbarBrand>
      </Link>  
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to="/about">
            <NavLink>About</NavLink>
            </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sundios">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Tools
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/people-also-ask">
                <DropdownItem>
                  <Titles title="People Also Ask + NLP"/>
                </DropdownItem>
                 </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

</div>
    <Switch>
    	<Route path="/About">
	   		<About2 />
	    </Route>
	    <Route path="/">
	   		<Home />
	    </Route>
      <Route path="/people-also-ask">
        <PAA />
      </Route>
	</Switch>

   </Router> 

    
        
    );
  }
  //We can change the return component to display something different on the home page
  function Home() {
  return (<PeopleAlsoAsk />);
}

  function About2() {
  return (<About/>);
}

 function PAA() {
  return (<PeopleAlsoAsk />);
}

export default Navigation;


