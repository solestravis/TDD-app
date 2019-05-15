import Input from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Input />', () => {
    let wrapper;
    const mockOnchange = jest.fn();
    const props = {
        onChange: mockOnchange,
        phrases: ['phrase 0']
    };

    beforeEach(() => {
        wrapper = shallow(
            <Input { ...props } />
        );
    });

    describe('render', () => {

        it('renders StyledInput when there are phrases', () => {
            const styledInput = wrapper.find('StyledInput');
            expect(styledInput).toHaveLength(1);
        });

        it('should have onChange event method', () => {
            expect(wrapper.prop('onChange')).toBe(mockOnchange);
        });

        it('should call onChange when key is pressed', () => {
            wrapper.simulate('change');
            expect(wrapper.prop('onChange')).toHaveBeenCalledTimes(1);
        });

        it('does not render when there are no phrases', () => {
            wrapper.setProps({
                ...props,
                phrases: []
            });
            expect(wrapper.props()).toEqual({});
        });

    });
    
});
