/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": "4px",
    "--padding": "0px",
    "--borderRadiusValueBar": "4px 0 0 4px",
    "--paddingValueBar": 0 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": "4px",
    "--padding": "0px",
    "--borderRadiusValueBar": "4px 0 0 4px",
    "--paddingValueBar": 0 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--borderRadius": "8px",
    "--padding": "4px",
    "--borderRadiusValueBar": "4px 0 0 4px",
    "--paddingValueBar": 4 + "px",
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <ValueLabel for="loadinglabel">{size}</ValueLabel>
      <BarBase 
        id="loadinglabel"
        max="100"
        value={value}
        size={size}
        style={styles}
      >
      </BarBase>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex; 
  align-items: center
`;

const ValueLabel = styled.label`
  text-transform: capitalize;
  font-weight: 700;
`;

const BarBase = styled.progress`
  //RESET & BASIC STYLES
  &[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 370px;
    height: var(--height);
    margin-left: 24px;
  }
 
  //VALUE
  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--borderRadius);
    border-radius: ${p => p.value === 100 ? "4px" : "var(--borderRadiusValueBar)"};
  }

  //BAR
  &[value]::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--borderRadius);
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }
`;


export default ProgressBar;

