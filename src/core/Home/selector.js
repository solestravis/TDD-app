import { createSelector } from 'reselect';

const example = store => store.home.title;

export const exampleSelector = createSelector(
    example,
    example => example
);
