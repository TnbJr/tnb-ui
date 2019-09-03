import React from 'react';
import { shallow, mount } from 'enzyme';
import { Checkbox } from './index.js'

describe('CheckBox', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Checkbox name="someName"/>)
    })
    it('render Component', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper.find('input').length).toEqual(1)
        expect(wrapper.find('.checkbox--placeholder').length).toEqual(1)
        expect(wrapper.find('label').length).toEqual(1)
    })

    it('renders corrext props', () => {
        expect(wrapper.find('input').prop('name')).toEqual('someName')
        expect(wrapper.find('input').prop('checked')).toEqual(false)
        expect(wrapper.find('input').prop('disabled')).toEqual(false)    
        expect(wrapper.find('input').prop('onChange')).toBeDefined()
    })

    it('calls onChange handler', () => {
        const props = {
            onChange: jest.fn(),
            name: 'name'
        }
        wrapper = shallow(<Checkbox {...props}/>)
        wrapper.find('input').simulate('change')
        expect(props.onChange).toHaveBeenCalled()
    })

    it('calls onBlur handler', () => {
        const props = {
            onBlur: jest.fn(),
            name: 'name'
        }
        wrapper = shallow(<Checkbox {...props}/>)
        wrapper.find('input').simulate('blur')
        expect(props.onBlur).toHaveBeenCalled()
    })
})
