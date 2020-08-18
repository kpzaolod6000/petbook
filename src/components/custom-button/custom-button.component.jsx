import React from 'react';

import './custom-buttom.styles.scss';


const CustomButton = ({ children, buttonPurpose, ...otherProps }) => (
  <button className={`${buttonPurpose} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
