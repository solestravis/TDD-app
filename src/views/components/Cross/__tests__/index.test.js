import Cross from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Cross />', () => {
    let wrapper;
    const onClick = jest.fn();
    const id = 2;

    beforeEach(() => {
        wrapper = shallow(
            <Cross id={ id } onClick={ onClick } />
        );
    });

    describe('render', () => {

        it('should always render StyledCross', () => {
            const styledCross = wrapper.find('StyledCross');
            expect(styledCross).toHaveLength(1);
        });
        
        it('should have an onClick event method', () => {
            wrapper.simulate('click');
            expect(wrapper.prop('onClick')).toHaveBeenCalledTimes(1);
        });

        it('should take an id', () => {
            expect(wrapper.prop('id')).toBe(id);
        });

    });

});
