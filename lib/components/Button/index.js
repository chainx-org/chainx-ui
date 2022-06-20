import React from 'react';
import { ButtonWrapper } from './styles';
export const Button = ({ children, ...rest }) => {
    return React.createElement(ButtonWrapper, { ...rest }, children);
};
//# sourceMappingURL=index.js.map