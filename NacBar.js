import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import QueryStatsIcon from '@mui/icons-material/QueryStats';



export const NavBar = () => {
const [activeLink, setActiveLink] = useState('home');
const [scrolled, seScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50){
            seScrolled(true);
        }else{
            seScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

}, [])

    return (
        <Navbar expand="lg"  className= {scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={''} alt='Logo'/>   
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className= {activeLink==='home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                <Nav.Link href="#sensors" className= {activeLink==='sensors' ? 'active navbar-link' : 'navbar-link'}>Sensor Information</Nav.Link>
                <Nav.Link href="#analytics" className= {activeLink==='analytics' ? 'active navbar-link' : 'navbar-link'}>Dashboard</Nav.Link>   
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src ={'HomeIcon'} alt=''/> </a>
                    <a href='#'><img src ={'HomeIcon'} alt=''/> </a>
                    <a href='#'><img src ={'HomeIcon'} alt=''/> </a>
                        
                </div>
                <button className='vvd' onClick={() => console.log("connect")}><span>Let's connect</span></button>

              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );



}