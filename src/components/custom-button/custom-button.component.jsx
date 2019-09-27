import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, customStyle, ...otherProps}) => (
  <button className={`${customStyle} custom-button`} {...otherProps}>
    {children.toUpperCase()}
  </button>
);

export default CustomButton;