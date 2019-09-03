import React from 'react';
import Button, { ButtonContainer } from './index'
import { shallow } from 'enzyme';

describe('Button', () => {
    let wrapper
    beforeEach(()=> {
        wrapper = shallow(<Button/>)
    })
    it('renders button', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper.find('button')).toHaveLength(1)
    })

    it('renders with correct className with big prop set', () => {
        wrapper.setProps({big: true})
        expect(wrapper.find('button').hasClass('mod-big')).toEqual(true)
    })

    it('renders with correct className with huge prop set', () => {
        wrapper.setProps({huge: true})
        expect(wrapper.find('button').hasClass('mod-huge')).toEqual(true)
    })

    it('renders with correct className with small prop set', () => {
        wrapper.setProps({small: true})
        expect(wrapper.find('button').hasClass('mod-small')).toEqual(true)
    })

    it('renders with correct className with outline prop set', () => {
        wrapper.setProps({outline: true})
        expect(wrapper.find('button').hasClass('mod-outline')).toEqual(true)
    })

    it('renders with correct className with darkoutline prop set', () => {
        wrapper.setProps({darkoutline: true})
        expect(wrapper.find('button').hasClass('mod-darkoutline')).toEqual(true)
    })

    it('renders with correct className with transparent prop set', () => {
        wrapper.setProps({transparent: true})
        expect(wrapper.find('button').hasClass('mod-transparent')).toEqual(true)
    })

    it('renders with correct className with stretch prop set', () => {
        wrapper.setProps({stretch: true})
        expect(wrapper.find('button').hasClass('mod-stretch')).toEqual(true)
    })

    it('renders with correct className with warning prop set', () => {
        wrapper.setProps({warning: true})
        expect(wrapper.find('button').hasClass('mod-warning')).toEqual(true)
    })

    it('renders with correct className with success prop set', () => {
        wrapper.setProps({success: true})
        expect(wrapper.find('button').hasClass('mod-success')).toEqual(true)
    })

    it('renders with correct className with highlight prop set', () => {
        wrapper.setProps({highlight: true})
        expect(wrapper.find('button').hasClass('mod-highlight')).toEqual(true)
    })

    it('renders with correct className with cancel prop set', () => {
        wrapper.setProps({cancel: true})
        expect(wrapper.find('button').hasClass('mod-cancel')).toEqual(true)
    })
    
})

describe('Button Container', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ButtonContainer>yurr</ButtonContainer>)
    })

    it('renders Component', () => {
        expect(wrapper).toHaveLength(1)
    })

    it('renders with correct className with cancel prop set', () => {
        wrapper.setProps({centered: true})
        expect(wrapper.find('div').hasClass('mod-centered')).toEqual(true)
    })

    it('renders with correct className with cancel prop set', () => {
        wrapper.setProps({right: true})
        expect(wrapper.find('div').hasClass('mod-right')).toEqual(true)
    })
})