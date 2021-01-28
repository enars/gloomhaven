import React, { useState } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 100%;
  background-color: white;
  height: 300px;
`;


export default function ActionCardBar() {
  const [actionCards, setActionCards] = useState();
  console.log(actionCards)
  return(
  <Bar></Bar>
  )

}