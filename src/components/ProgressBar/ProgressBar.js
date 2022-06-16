/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": "4px",
    "--borderRadiusValueBar": "4px 0 0 4px",
    "--paddingValueBar": 0 + "px",
    "--border": "0px",
    // "--fontSize": 16 / 16 + "rem",
    // "--padding": "4px 12px"
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": "4px",
    "--borderRadiusValueBar": "4px 0 0 4px",
    "--paddingValueBar": 0 + "px",
    "--border": "0px",
    // "--fontSize": 18 / 16 + "rem",
    // "--padding": "12px 20px"
  },
  large: {
    "--height": 24 + "px",
    "--borderRadius": "8px",
    "--borderRadiusValueBar": "8px 0 0 8px",
    "--paddingValueBar": 4 + "px",
    "--border": "4px solid ${COLORS.gray300};",
    // "--fontSize": 21 / 16 + "rem",
    // "--padding": "16px 32px"
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  // let Component;
  // if (size === "small") {
  //   Component = SmallBar;
  // } else if (size === "medium") {
  //   Component = MediumBar;
  // } else if (size === "large") {
  //   Component = LargeBar;
  // // } else {
  // //   throw new Error(`Unrecognized Button variant: ${value}`);
  // }

  // return <Component style={styles}></Component>;

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
  //RESET
  &[value] {
    -webkit-appearance: none;
    appearance: none;

    width: 370px;
    height: var(--height);
    margin-left: 24px;
  }
 
  //VALUE
  &[value]::-webkit-progress-value {
    border: var(--border);
    background-color: ${COLORS.primary};
    border-radius: var(--borderRadius);
    border-radius: ${p => p.value === 100 ? "4px" : "var(--borderRadiusValueBar)"};
  }

  //BAR
  &[value]::-webkit-progress-bar {
    background-color: ${COLORS.gray300};
    border-radius: var(--borderRadius);
  }
`;


export default ProgressBar;

