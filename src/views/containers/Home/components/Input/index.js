import React from 'react';
import { StyledInput } from './styled';
import { array, func } from 'prop-types';

const Input = ({ onChange, phrases }) => (
    phrases.length ?
        <StyledInput onChange={ onChange } />
        :
        null
);

Input.propTypes = {
    onChange: func,
    phrases: array
};

Input.displayName = 'Input';

export default Input;
