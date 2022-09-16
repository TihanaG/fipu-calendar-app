import React from 'react'
import styled from "styled-components";

const EventBox = styled.div`
    background-color: #2158C2;
    border-radius: 4px;
    color: #fff;
    padding: 8px;
    margin-bottom: 4px;
`;

export const Event = ({ name, time }) => {
  return (
    <EventBox>{name} - {time}</EventBox>
  )
}
