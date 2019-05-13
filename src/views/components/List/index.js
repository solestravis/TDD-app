import React from 'react';
import { StyledList } from './styled';
import { any } from 'prop-types';

const List = ({ children }) => (
    <StyledList>{ children }</StyledList>
);

List.propTypes = {
    children: any
};

List.displayName = 'List';

export default List;
