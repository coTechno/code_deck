import React from 'react'
import styled from 'styled-components'
import { BiImport } from 'react-icons/bi'

export const Console = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  background: #111422;
  color: #fff;
  height: 4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
  padding: 0 1rem;
  z-index: 2;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input{
    display: none;
  }
  label, a{
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    gap: 0.7rem;
    background: -webkit-linear-gradient(#eee,#333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }
`

export const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
  border: 0;
  outline: 0;
  padding: 0.25rem;
  padding-top: 0.5rem;
  font-size: 1.1rem;
  background: #21222c;
  color: #fff;
`
const InputConsole = ({ currentInput, setCurrentInput, getFile }) => {
  return (
    <Console>
      <Header>
        Input :
        <label htmlFor='inputfile'>
          <input type="file" accept='.' id="inputfile" onChange={(e) => getFile(e, setCurrentInput)} />
          <BiImport style={{ color: '#a3a7bc' }}/> Import Input
        </label>
      </Header>
      <TextArea
        onChange={(e) => setCurrentInput(e.target.value)}
        value={currentInput}
      />
    </Console>
  )
}

export default InputConsole