import React from 'react';
import { IconWrapper } from './styles';
const Icon = ({ onClick, onMouseEnter, onMouseLeave, iconSrc, size, margin, padding, border, cursor, altName = '', className = '', }) => {
    return (React.createElement(IconWrapper, { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, className: className, src: iconSrc, alt: altName, width: size, height: size, margin: margin, padding: padding, border: border, cursor: cursor }));
};
export { Icon };
//# sourceMappingURL=index.js.map