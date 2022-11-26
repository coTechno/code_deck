import React, { useContext } from 'react'
import styled from 'styled-components'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import Modal from '../../components/Modal'
import { ModalContext } from '../../context/ModalContext'
import MobileViewInfo from './MobileViewInfo';
import { isMobile } from 'react-device-detect';


const StyledHome = styled.div`
width: 100%;
height: 100vh;
`
const MobileView = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;

& >span{
  border: 2px solid black;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center
}
`
const Home = () => {

  const { isOpenModal } = useContext(ModalContext);

  return (
    isMobile ?
      <StyledHome>
        <MobileView>
          <MobileViewInfo/>
        </MobileView>
      </StyledHome>
      :
      <StyledHome>
        <LeftComponent />
        <RightComponent />
        {isOpenModal.show && <Modal />}
      </StyledHome>
  )
}

export default Home