import List from 'views/components/List';
import ListItem from 'views/components/ListItem';

import React from 'react';
import { array, func, string } from 'prop-types';

const PhraseList = ({ input, onCrossClick, phrases, results }) => (
    <List>
        {
            input.length ?
                <ListItem phrases={ results } onCrossClick={ onCrossClick } />
                :
                <ListItem phrases={ phrases } onCrossClick={ onCrossClick } />
        }
    </List>
);

PhraseList.propTypes = {
    input: string,
    onCrossClick: func,
    phrases: array,
    results: array
};

PhraseList.displayName = 'PhraseList';

export default PhraseList;
