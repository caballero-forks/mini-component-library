/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <label for="loadinglabel">Loading</label>
      <strong>{value}</strong>
    </>
  );
};



export default ProgressBar;
