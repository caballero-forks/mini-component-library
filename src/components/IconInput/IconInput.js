import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--font-size": 14 + "px",
    "--line-height": 16 + "px",
    "--border-thick": 1 + "px",
  },
  large: {
    "--font-size": 18 + "px",
    "--line-height": 21 + "px",
    "--border-thick": 2 + "px",
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden><label for={label}>{label}</label></VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={size === "small" ? 16 : 20} strokeWidth={size === "small" ? 1 : 2}></Icon>
      </IconWrapper>
      <TextInput  
        type="text" 
        id="name" 
        name="name"
        required
        minlength="4"
        maxlength="8" 
        size="10"
        placeholder={placeholder}
        style={styles}
        width= {width}
        icon={icon}
      >   
       
      </TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  /* display: flex; 
  align-items: center;  */
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center; 
  /* margin: auto 0; */
  /* height: var(--size); */
`;

const TextInput = styled.input`
  width: ${props => props.width + "px"};
  padding: 4px;
  padding-left: 24px;
  border: none;
  font-family: "Roboto", "sans-serif";
  font-size: var(--font-size);
  line-height: var(--line-height);
  border-bottom: var(--border-thick) solid ${COLORS.black};
  
  &[type=text] {
    color: inherit;
    font-weight: 700;

    &:hover {
      color: ${COLORS.black};
  }
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 4px;
  }

  
`;


export default IconInput;
