import React from 'react';
import { StyledButton } from './styled';
import { func, string } from 'prop-types';

const Button = ({ children, color, onClick }) => (
    <StyledButton color={ color } onClick={ onClick }>{ children }</StyledButton>
);

Button.propTypes = {
    children: string,
    color: string,
    onClick: func
};

Button.displayName = 'Button';

export default Button;
