import Cross from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Cross />', () => {
    let wrapper;
    const onClick = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
            <Cross onClick={ onClick } />
        );
    });

    describe('render', () => {

        it('should have a surrounding span tag', () => {
            const span = wrapper.find('span');
            expect(span).toHaveLength(1);
        });
        
        it('should have an onClick event method', () => {
            wrapper.simulate('click');
            expect(wrapper.prop('onClick')).toHaveBeenCalledTimes(1);
        });

    });

});
