import Cross from 'views/components/Cross';
import List from 'views/components/List';
import ListItem from 'views/components/ListItem';

import React from 'react';
import { array } from 'prop-types';

const PhraseList = ({ phrases }) => (
    <List>
        {
            phrases.map((phrase, index) => (
                <ListItem id={ index } key={ index } >
                    { phrase } <Cross onClick={ this._handleCrossClick } />
                </ListItem>
            ))
        }
    </List>
);

PhraseList.propTypes = {
    phrases: array
};

PhraseList.displayName = 'PhraseList';

export default PhraseList;
