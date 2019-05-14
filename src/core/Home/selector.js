import { createSelector } from 'reselect';

const phrases = store => store.home.phraseCollection;

export const phraseSelector = createSelector(
    phrases,
    phrases => phrases.map(phrase => (phrase[0]))
);
