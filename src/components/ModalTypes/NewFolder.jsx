import React, { useContext, useState } from 'react'
import { Header, CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
const NewFolder = () => {
  const { closeModal } = useContext(ModalContext);
  const { addFolder } = useContext(PlaygroundContext)
  const [folderTitle, setFolderTitle] = useState("");

  return (
    <>
      <Header>
        <h2>Create New Folder</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input style={{borderRadius: '5px', padding: '0px 10px'}} type="text" onChange={(e) => setFolderTitle(e.target.value)} />
        <button onClick={() => {
          addFolder(folderTitle)
          closeModal()
        }} style={{borderRadius: '5px', cursor: 'pointer', border: 'none', backgroundColor: '#4158D0', backgroundImage: 'linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(175 106 170) 50%, rgb(200 80 192) 100%)',
        color: '#fff'}}>Create Folder</button>
      </Input>
    </>
  )
}

export default NewFolder