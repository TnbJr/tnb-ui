import React from 'react';
import { shallow } from 'enzyme';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6  } from './index.js';

describe('Headings1', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Heading1 className="slime">yay</Heading1>)
    })
    it('render Component', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper.find('.content-heading')).toHaveLength(1)
        expect(wrapper.find('.slime')).toHaveLength(1)
        expect(wrapper.find('h1')).toHaveLength(1)
    })

    it('render h2', () => {
        wrapper = shallow(<Heading2 className="slime">yay</Heading2>)
        expect(wrapper.find('h2')).toHaveLength(1)
    })

    it('render h3', () => {
        wrapper = shallow(<Heading3 className="slime">yay</Heading3>)
        expect(wrapper.find('h3')).toHaveLength(1)
    })

    it('render h4', () => {
        wrapper = shallow(<Heading4 className="slime">yay</Heading4>)
        expect(wrapper.find('h4')).toHaveLength(1)
    })

    it('render h5', () => {
        wrapper = shallow(<Heading5 className="slime">yay</Heading5>)
        expect(wrapper.find('h5')).toHaveLength(1)
    })

    it('render h6', () => {
        wrapper = shallow(<Heading6 className="slime">yay</Heading6>)
        expect(wrapper.find('h6')).toHaveLength(1)
    })
})