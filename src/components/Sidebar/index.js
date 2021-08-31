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
<SidebarLink to="about">
About
</SidebarLink>
<SidebarLink to="discover">
Discover
</SidebarLink>
<SidebarLink to="services">
Team
</SidebarLink>
<SidebarLink to="signup">
Collaborate!
</SidebarLink>
</SidebarMenu>
<SideBtnWrap>
<SidebarRoute to="signin">
Research
</SidebarRoute>
</SideBtnWrap>
</SidebarWrapper>
</SidebarContainer>
);
}

export default Sidebar;