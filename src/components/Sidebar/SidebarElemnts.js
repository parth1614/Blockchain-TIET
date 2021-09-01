import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: absolute;
z-index: 999;
// height: 100%
// width: 100%
background: white;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
// border-radius: 25px;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};
top: ${({isOpen})=> (isOpen ? '0' : '-100%')};
width: ${({isOpen})=> (isOpen ? '100%' : '0')};
height: ${({isOpen})=> (isOpen ? '100%' : '0')};
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
margin-left: 8px;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor:pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color:#fff;
`

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align:center;


@media screen and (max-width:480px){
  grid-template-rows: repeat(6,60px);
 
}
`

export const SidebarLink = styled(LinkS)`
display:flex;
// align-items: center;
flex-direction: column;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style:none;
transition: 0.2s ease-in-out;
// margin-botton: -50px
color: #fff;
cursor: pointer;

&:hover{
  color: #01bf71;
  transition: 0.2s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
margin-top: -60px;
cursor: pointer;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`