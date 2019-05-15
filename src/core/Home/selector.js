import { createSelector } from 'reselect';

const phrases = store => store.home.phraseCollection;
const search = store => store.home.searchCollection;

export const phraseSelector = createSelector(
    phrases,
    phrases => phrases
);

export const searchSelector = createSelector(
    search,
    search => search
);
