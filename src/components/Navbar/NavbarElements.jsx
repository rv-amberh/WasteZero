import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'



export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#fdfefb' : 'transparent')};
height: 80px;
 margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1 rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height:80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weifht: bold;
text-decoration: none
`

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-rjght: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 30px;
font-size: 1.3rem;
padding-right: 20px;
`

export const NavLinks = styled(LinkS)`
color: ${({scrollNav}) => (scrollNav ? '#385b4f' : '#fff')} ;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1 rem;
cursor: pointer;
margin-right: 1.7rem;

&:hover {
    transition: all 0.2s ease-in-out;
    color: ${({primary}) => (primary ? '#fff' : '#32954a')};
}

&.active {
    border-bottom: 2px solid #f7ac32;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #f7ac32;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
z-index: 1000;

&:hover {
    background: #fff;
    color: #f7ac32;
    border: none;
}
`