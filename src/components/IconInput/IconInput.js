import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Icon id="search" size={20} strokeWidth={1}></Icon>
      <Input 
        type="text" 
        id="name" 
        name="name"
        required
        minlength="4"
        maxlength="8" 
        size="10"
        placeholder={placeholder}
      >   
      </Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex; 
  align-items: center; 
  width: 270px;
  
`;

const Input = styled.input`
  padding: 4px;
  padding-left: 8px; 
  border: none;
  font-family: "Roboto", "sans-serif";
  font-size: 14px;
  border-bottom: 1px solid ${COLORS.black};
  
  &[type=text] {
    color: ${COLORS.black};
    font-weight: 700;
  }
`;


export default IconInput;
