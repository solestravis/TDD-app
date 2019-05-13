import React from 'react';
import { StyledListItem } from './styled';
import { any, string } from 'prop-types';

const ListItem = ({ children, id, ...props }) => (
    <StyledListItem id={ id } { ...props }>{ children }</StyledListItem>
);

ListItem.propTypes = {
    children: any,
    id: string.isRequired
};

ListItem.displayName = 'ListItem';

export default ListItem;
