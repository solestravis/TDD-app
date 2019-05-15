import Cross from 'views/components/Cross';
import React from 'react';
import { StyledItem } from './styled';
import { array, func } from 'prop-types';

export const Item = ({ phrases, onCrossClick }) => (
    phrases.map((phrase, index) => (
        <StyledItem key={ index }>
            { phrase }<Cross id={ index } onClick={ onCrossClick } />
        </StyledItem>
    ))
);

Item.propTypes = {
    onCrossClick: func,
    phrases: array
};

Item.displayName = 'Item';
