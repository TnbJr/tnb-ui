import React from 'react';
import Icon from './index'
import {ICONS} from '../../constants';
import { shallow } from 'enzyme';


describe('Icon', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<Icon icon={ICONS.CROSS}/>)
    })

    it('render Icon', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('svg')).toHaveLength(1);
    })

    it('renders correct Icon path', () => {
        expect(wrapper.find('path').props()).toHaveProperty('d', ICONS.CROSS);
    })
})