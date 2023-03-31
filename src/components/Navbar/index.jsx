import { useState, useEffect } from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import logo from '../../images/wasteWhite.png';
import darkLogo from '../../images/wasteGreen.png';
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {

const [hover, setHover] = useState(false);
const [scrollNav, setScrollNav] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

   useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
   <> 
     <Nav scrollNav={scrollNav}> 
        <NavbarContainer> 
            <NavLogo onClick={toggleHome} to="/"> <img src={scrollNav ? darkLogo : logo} alt="WasteZero" width={scrollNav ? 220 : 270} height={scrollNav ? 200 : 120} /> </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks scrollNav={scrollNav} onMouseEnter={onHover} to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                </NavItem>
                
                <NavItem>
                    <NavLinks scrollNav={scrollNav}  onHover={onHover} to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>FoodFAQs</NavLinks>
                </NavItem>
                
                <NavItem>
                    <NavLinks scrollNav={scrollNav} onHover={onHover} to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                </NavItem>
            
                <NavItem>
                    <NavLinks scrollNav={scrollNav} onHover={onHover} to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Volunteer</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink onHover={onHover} to="/sign-in">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar