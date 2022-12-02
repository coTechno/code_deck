import React from 'react'
import { Console, Header, TextArea } from './InputConsole'
import { BiExport } from 'react-icons/bi'
import styled from 'styled-components'

const ExportOutput = styled.div`
a{
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: -webkit-linear-gradient(#eee,#333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
const OutputConsole = ({ currentOutput }) => {
  return (
    <Console>
      <Header style={{ justifyContent: 'space-between'}}>
        Output :
        <ExportOutput>
          <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentOutput)}`} download="output.txt">
          <BiExport style={{color: '#a3a7bc'}}/> Export Output
          </a>
        </ExportOutput>

      </Header>
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
  )
}

export default OutputConsole