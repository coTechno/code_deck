import React from 'react';
import styled from 'styled-components'

import logo from '../../assets/code.png'
import { motion } from 'framer-motion';

const StyledLeftComponent = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('https://images4.alphacoders.com/114/1143395.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    
`
const ContentContainer = styled.div`
    text-align: center;
`

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;

    span{
        font-weight: 700;
    }
`
const SubHeading = styled.div`
    font-size: 1.5rem;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 1.5rem;
`

const Note = styled.button`
    margin: 0rem 1.2rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: transform 0.5s;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }
`

function MobileViewInfo() {
    return (
        <StyledLeftComponent>
            <ContentContainer>
              <motion.div initial={{ y: -20 }} animate={{ y: 20 }} transition={{ type: 'smooth', repeatType: 'mirror', duration: 2, repeat: Infinity }}>
                <Logo Logo src={logo} alt="" />
              </motion.div>
              <MainHeading> <span>Hacker</span> Code</MainHeading>
              <SubHeading>Code. Compile. Debug.</SubHeading>
              <Note><span>The app supports only Desktop Mode</span></Note>
            </ContentContainer>
          </StyledLeftComponent>
    )
}

export default MobileViewInfo