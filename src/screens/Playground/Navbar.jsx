import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/code.png'
import { useNavigate } from 'react-router-dom'
const NavbarContainer = styled.div`
  // height: 4.5rem;
  height: ${({isFullScreen}) => isFullScreen ? '0' : '4.5rem'};
  background: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('https://images4.alphacoders.com/114/1143395.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavbarContent = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Logo = styled.img`
  width: 60px;
`

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span{
    font-weight: 700;
  }
`

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate()
  return (
    <NavbarContainer isFullScreen = {isFullScreen}>
      <NavbarContent onClick={() => {
        navigate('/')
      }}>
        <Logo src={logo} />
        <MainHeading>
          <span>Hacker</span> Code
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar