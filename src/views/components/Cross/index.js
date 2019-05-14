import React from 'react';
import { StyledCross } from './styled';
import { func, number, oneOfType, string } from 'prop-types';

const Cross = ({ id, onClick }) => (
    <StyledCross id={ id } onClick={ onClick }>&#10005;</StyledCross>
);

Cross.propTypes = {
    id: oneOfType([number, string]).isRequired,
    onClick: func
};

Cross.displayName = 'Cross';

export default Cross;
