import Input from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Input />', () => {
    let wrapper;
    const mockOnchange = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
            <Input phrases={ [] } onChange={ mockOnchange } />
        );
    });

    describe('render', () => {

        it('always renders StyledInput', () => {
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

    });
    
});
