import React from 'react';
import { shallow } from 'enzyme';
import InputBlock from './index.js';

describe('InputBlock', () => {
    let wrapper;
    it('render InputBlock component', () => {
        wrapper = shallow(<InputBlock/>)
        expect(wrapper).toHaveLength(1)
    })

    it('render InputBlock.Item', () => {
        wrapper = shallow(<InputBlock.Item/>)
        expect(wrapper).toHaveLength(1)
    })

})