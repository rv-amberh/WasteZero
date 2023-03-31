import {CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'



const Sidebar = ({toggle, isOpen}) => {
  return (
   <SidebarContainer isOpen={isOpen} onClick={toggle}> 
    <Icon>
        <CloseIcon onClick={toggle} />
    </Icon>

    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='/' onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to='/'  onClick={toggle}>
                Discover
            </SidebarLink>
            <SidebarLink to='/'  onClick={toggle}>
                Services
            </SidebarLink>
            <SidebarLink to='/'  onClick={toggle}>
                Sign Up
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute>
                Sign In
            </SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
   </SidebarContainer>
  )
}

export default Sidebar