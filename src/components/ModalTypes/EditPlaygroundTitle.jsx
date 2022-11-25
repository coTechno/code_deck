import React, { useContext, useState } from 'react'
import { Header, CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

const EditPlaygroundTitle = () => {
  const { isOpenModal, closeModal } = useContext(ModalContext);
  const { editPlaygroundTitle, folders } = useContext(PlaygroundContext);

  const { folderId, cardId } = isOpenModal.identifiers;
  const [playgroundTitle, setPlaygroundTitle] = useState(folders[folderId].playgrounds[cardId].title);

  return (
    <>
      <Header>
        <h2>Edit Card Title</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" style={{borderRadius: '5px', padding: '0px 10px'}} onChange={(e) => setPlaygroundTitle(e.target.value)} />
        <button onClick={() => {
          editPlaygroundTitle(folderId, cardId, playgroundTitle)
          closeModal()
        }} style={{borderRadius: '5px', cursor: 'pointer', border: 'none', backgroundColor: '#4158D0', backgroundImage: 'linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(175 106 170) 50%, rgb(200 80 192) 100%)',
        color: '#fff'}}>Update Title</button>
      </Input>
    </>
  )
}

export default EditPlaygroundTitle