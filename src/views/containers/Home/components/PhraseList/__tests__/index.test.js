import PhraseList from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<PhraseList />', () => {
    let wrapper;
    const onCrossClick = jest.fn();
    const props = {
        input: '',
        onCrossClick,
        phrases: [],
        results: []
    };

    beforeEach(() => {
        wrapper = shallow(
            <PhraseList { ...props } />
        );
    });

    describe('render', () => {

        it('always renders List', () => {
            const list = wrapper.find('List');
            expect(list).toHaveLength(1);
        });
        
        it('always renders phrases when there is no input value', () => {
            const phrase = 'lorem ipsum';
            const phrases = [phrase];
            wrapper.setProps({
                ...props,
                phrases
            });
            const listItem = wrapper.find('ListItem');
            expect(listItem).toHaveLength(1);
            expect(listItem.childAt(0).debug()).toBe(phrase);
        });

        it('always renders results when there is an input value', () => {
            const phrase = 'lorem ipsum';
            const phrases = [phrase, 'bacon pork'];
            const results = [phrase];
            wrapper.setProps({
                ...props,
                input: 'lorem',
                phrases,
                results
            });
            const listItem = wrapper.find('ListItem');
            expect(listItem).toHaveLength(1);
            expect(listItem.childAt(0).debug()).toBe(phrase);
        });

    });

});
