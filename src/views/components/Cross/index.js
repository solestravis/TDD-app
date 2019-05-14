import React from 'react';
import { StyledCross } from './styled';
import { func } from 'prop-types';

const Cross = ({ onClick }) => (
    <StyledCross onClick={ onClick }>&#10005;</StyledCross>
);

Cross.propTypes = {
    onClick: func
};

Cross.displayName = 'Cross';

export default Cross;
