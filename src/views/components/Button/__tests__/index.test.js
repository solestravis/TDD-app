import Button from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Button />', () => {
    
    const children = 'children';
    const mockOnClick = jest.fn();
    const color = 'red';
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Button color={ color } onClick={ mockOnClick }>{ children }</Button>
        );
    });

    describe('render', () => {

        it('always renders StyledButton', () => {
            const styledButton = wrapper.find('StyledButton');
            expect(styledButton).toHaveLength(1);
        });

        it('should have children', () => {
            expect(wrapper.prop('children')).toBe(children);
        });
        
        it('should have a color prop', () => {
            expect(wrapper.prop('color')).toBe(color);
        });
        
        it('should have an onClick event', () => {
            expect(wrapper.prop('onClick')).toBe(mockOnClick);
        });
        
        it('should call onClick when button is clicked', () => {
            wrapper.simulate('click');
            expect(mockOnClick).toHaveBeenCalledTimes(1);
        });

    });

});
