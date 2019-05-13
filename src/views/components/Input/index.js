import React from 'react';
import { StyledInput } from './styled';
import { func } from 'prop-types';

const Input = ({ onChange }) => (
    <StyledInput onChange={ onChange } />
);

Input.propTypes = {
    onChange: func
};

Input.displayName = 'Input';

export default Input;
