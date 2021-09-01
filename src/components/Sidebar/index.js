import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu,SidebarLink,SidebarRoute, SideBtnWrap} from './SidebarElemnts.js';

const Sidebar = ({isOpen,toggle}) => {
return(
<SidebarContainer isOpen={isOpen} onClick={toggle}>
<Icon onClick={toggle}>
<CloseIcon />
</Icon>
<SidebarWrapper>
<SidebarMenu>
<SidebarLink to="about" onClick={toggle}>
About
</SidebarLink>
<SidebarLink to="discover" onClick={toggle}>
Discover
</SidebarLink>
<SidebarLink to="services" onClick={toggle}>
Team
</SidebarLink>
<SidebarLink to="signup" onClick={toggle}>
Collaborate!
</SidebarLink>
</SidebarMenu>
<SideBtnWrap>
<SidebarRoute to="signin" onClick={toggle}>
Research
</SidebarRoute>
</SideBtnWrap>
</SidebarWrapper>
</SidebarContainer>
);
}

export default Sidebar;