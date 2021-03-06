import Home from '../main';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Home />', () => {

    let wrapper;

    const deletePhrase = jest.fn();
    const loadPhrase = jest.fn();
    const searchPhrase = jest.fn();

    const props = {
        children: '',
        deletePhrase,
        loadPhrase,
        phraseCollection: ['phrase 0'],
        searchPhrase
    };

    beforeEach(() => {
        wrapper = shallow(
            <Home { ...props } />
        );
    });

    describe('render', () => {

        it('always renders Layout', () => {
            const layout = wrapper.find('Layout');
            expect(layout).toHaveLength(1);
        });

        it('always renders Container', () => {
            const container = wrapper.find('Container');
            expect(container).toHaveLength(1);
        });

        it('always renders Button', () => {
            const button = wrapper.find('Button');
            expect(button).toHaveLength(1);
        });

        it('always renders PhraseList', () => {
            const list = wrapper.find('PhraseList');
            expect(list).toHaveLength(1);
        });

        it('always renders Input', () => {
            const input = wrapper.find('Input');
            expect(input).toHaveLength(1);
        });

    });

    describe('methods', () => {

        it('calls _handleButtonClick and dispatches loadPhrase', () => {
            const mockHandleClick = jest.spyOn(wrapper.instance(), '_handleButtonClick');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleButtonClick();
            expect(mockHandleClick).toHaveBeenCalled();
            expect(loadPhrase).toHaveBeenCalledTimes(1);
        });

        it('calls _handleCrossClick and dispatches deletePhrase', () => {
            const mockEvent = { target: { id: 1 } };
            const mockHandleClick = jest.spyOn(wrapper.instance(), '_handleCrossClick');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleCrossClick(mockEvent);
            expect(mockHandleClick).toHaveBeenCalled();
            expect(deletePhrase).toHaveBeenCalledTimes(1);
            expect(deletePhrase).toHaveBeenCalledWith(mockEvent.target.id);
        });

        it('calls _handleInputChange and dispatches searchPhrases', () => {
            const mockEvent = { target: { value: 1 } };
            const mockHandleChange = jest.spyOn(wrapper.instance(), '_handleInputChange');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleInputChange(mockEvent);
            expect(mockHandleChange).toHaveBeenCalled();
            expect(searchPhrase).toHaveBeenCalledTimes(1);
            expect(searchPhrase).toHaveBeenCalledWith(mockEvent.target.value);
        });

    });

});
