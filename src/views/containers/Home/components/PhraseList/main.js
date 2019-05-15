import Cross from 'views/components/Cross';
import List from 'views/components/List';
import ListItem from 'views/components/ListItem';

import React from 'react';
import { array, func, string } from 'prop-types';

const PhraseList = ({ input, onCrossClick, phrases, results }) => (
    <List>
        {
            input.length ?
                results.map((phrase, index) => (
                    <ListItem key={ phrase }>
                        { phrase }<Cross id={ index } onClick={ onCrossClick } />
                    </ListItem>
                ))
                :
                phrases.map((phrase, index) => (
                    <ListItem key={ phrase }>
                        { phrase }<Cross id={ index } onClick={ onCrossClick } />
                    </ListItem>
                ))
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
