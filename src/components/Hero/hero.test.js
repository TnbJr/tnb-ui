import React from 'react';
import { shallow } from 'enzyme';
import Hero from './index.js';
import {Overlay} from '../../index.js'

describe('Hero', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Hero className="slime">yay</Hero>)
    })
    it('render Component', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper.find('.hero')).toHaveLength(1)
        expect(wrapper.find('.hero-header')).toHaveLength(1)
        expect(wrapper.find('.hero-sub-header')).toHaveLength(1)
        // expect(wrapper.find(Overlay)).toHaveLength(1)
    })
})