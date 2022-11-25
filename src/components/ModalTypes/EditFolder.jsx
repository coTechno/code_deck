import React, { useContext, useState } from 'react'
import { Header, CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

const EditFolder = () => {
  const { closeModal, isOpenModal } = useContext(ModalContext);
  const { editFolderTitle, folders } = useContext(PlaygroundContext);

  const folderId = isOpenModal.identifiers.folderId;
  const [folderTitle, setFolderTitle] = useState(folders[folderId].title);

  return (
    <>
      <Header>
        <h2>Edit Folder Title</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" style={{borderRadius: '5px', padding: '0px 10px'}} onChange={(e) => setFolderTitle(e.target.value)} />
        <button onClick={() => {
          editFolderTitle(folderId, folderTitle)
          closeModal()
        }} style={{borderRadius: '5px', cursor: 'pointer'}} >Update Title</button>
      </Input>
    </>
  )
}

export default EditFolder;