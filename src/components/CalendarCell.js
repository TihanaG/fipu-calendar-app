import React from 'react'
import styled from 'styled-components'
import { Event } from './Event';

const Cell = styled.div`
    border: 1px solid #ccc;
    position: relative;
    height: 100%;
    padding: 10px;

    :hover {
        background-color: #ccc;
        cursor: pointer;
    }
`;

export const CalendarCell = ({ dateNumber = '', events = [] }) => {
  return (
    <Cell>
        {dateNumber}
        {/* promijeniti key u id ili nesto kasnije */}
        {events.map(event => <Event key={event.name} name={event.name} time={event.time} /> )}
    </Cell>
  )
}
