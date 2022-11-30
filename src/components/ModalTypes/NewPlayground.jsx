import React, { useContext, useState } from 'react'
import { Header, CloseButton } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
import Select from 'react-select';
import styled from 'styled-components';
const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;
  margin-bottom: 1.5rem;
  input {
    flex-grow: 1;
    height: 2rem;
  }

  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`;

const NewPlayground = () => {
  const { isOpenModal, closeModal } = useContext(ModalContext);
  const { addPlayground } = useContext(PlaygroundContext);

  const languageOptions = [
    { value: "cpp", label: "cpp" },
    { value: "java", label: "java" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
  ];

  const {folderId} = isOpenModal.identifiers;
  const [cardTitle, setCardTitle] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
      <Header>
        <h2>Create New Playground</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <InputWithSelect>
        <input
          type='text'
          style={{borderRadius: '5px', padding: '0px 10px'}}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button onClick={() => {
          addPlayground(folderId, cardTitle, language.label)
          closeModal();
        }} style={{borderRadius: '5px', cursor: 'pointer', border: 'none', backgroundColor: '#4158D0', backgroundImage: 'linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(175 106 170) 50%, rgb(200 80 192) 100%)',
        color: '#fff'}}> Create Playground </button>
      </InputWithSelect>
    </>
  )
}

export default NewPlayground