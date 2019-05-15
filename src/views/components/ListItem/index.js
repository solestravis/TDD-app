import React from 'react';
import { StyledListItem } from './styled';
import { any } from 'prop-types';

export const ListItem = ({ children }) => (
    <StyledListItem>{ children }</StyledListItem>
);

ListItem.propTypes = {
    children: any
};

ListItem.displayName = 'ListItem';

export default ListItem;
