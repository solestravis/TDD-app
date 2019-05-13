import React from 'react';
import { func } from 'prop-types';

const Cross = ({ onClick }) => (
    <span onClick={ onClick }>&#10005;</span>
);

Cross.propTypes = {
    onClick: func
};

Cross.displayName = 'Cross';

export default Cross;
