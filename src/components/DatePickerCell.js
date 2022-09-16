import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
    background-color: ${props => props.isSelected ? 'black' : 'white'};
    color: ${props => props.isSelected ? 'white' : 'black'};
    border: 1px solid #ccc;
    position: relative;
    height: 100%;
    padding: 10px;

    :hover {
        background-color: ${props => props.isSelected ? 'black' : '#ccc'};
        cursor: pointer;
    }
`;

export const DatePickerCell = ({ isSelected, dateNumber = '' }) => {
  return (
    <Cell isSelected={isSelected}>
        {dateNumber}
    </Cell>
  )
}
