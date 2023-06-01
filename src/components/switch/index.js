import React, { useState } from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 10%;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #DC143C;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBoxInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
  
`;
const On = styled.p`
position: absolute;
font-size: 8px;
top: 7px;
left: 5px;
user-select: none;
color: white;
font-weight: 600;
  `
  const Off = styled.p`
  position: absolute;
  font-size: 8px;
  top: 7px;
  right: 5px;
  user-select: none;
  color: white;
  font-weight: 600;
    `

function Switch({turnOn, turnOff}){
    const [bool, setBool] = useState(true)
    
  return (
    <CheckBoxWrapper>
      <CheckBoxInput id="checkbox" type="checkbox" onChange={()=> { 
        setBool(!bool)
        bool ? turnOn() : turnOff()
        }} />
      <CheckBoxLabel htmlFor="checkbox" >{bool ? <Off>Off</Off> : <On>On</On>}</CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default Switch;