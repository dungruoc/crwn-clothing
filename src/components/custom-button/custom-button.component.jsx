import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => (
  <CustomButtonContainer {...otherProps}>
    {children.toUpperCase()}
  </CustomButtonContainer>
);

export default CustomButton;