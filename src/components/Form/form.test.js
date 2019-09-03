import React from 'react';
import { mount } from 'enzyme';
import Recaptcha from "react-recaptcha";
import DynamicForm from './index.js';
import { InputBlock, InputMessage, TextInput, Button, Select, TextArea, Checkbox } from '../../index.js';


describe('DynamicForm', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            fields: [
                {
                    label: 'First Name',
                    type: 'input',
                    name: 'firstName',
                    value: '',
                    classNames: "tetx",
                    placeholder: 'placeHolder',
                    required: true,        
                },
                {
                    label: 'Occupation',
                    type: 'select',
                    options: ['Teacher', 'Software Engineer', 'Doctor', 'Lawyer'],
                    name: 'occupation',
                    value: '',
                    placeholder: 'Please Select',
                    required: false,
                    classNames: "occupation-class"
                },
                {
                    label: 'Talk to me nice',
                    type: 'textarea',
                    name: 'message',
                    value: '',
                    placeholder: 'text area place holder',
                    required: true,
                    classNames: "occupatextareation-class"
                },
                {
                    label: 'Agree to Terms & Conditions',
                    type: 'checkbox',
                    name: 'terms',
                    value: false,
                    required: true,
                },
                {
                    label: 'Verify You are a human',
                    type: 'recaptcha',
                    name: 'recaptcha',
                    value: '',
                    required: true,
                    siteKey: '6Lc7UqIUAAAAAACgbIu3XSiRMLdS18ogCXFHFEqZ'
                },
                {
                    label: 'HAnnn',
                    type: 'button',
                    btnType: 'submit',
                    name: 'button',
                },
            ],
            validation: {}
        }
        wrapper = mount(<DynamicForm {...props}/>)
    })

    afterEach(() => {
        wrapper.unmount();
    })
    it('render Component', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper.find('form').length).toEqual(1)
        expect(wrapper.find(InputBlock).length).toEqual(1)
        expect(wrapper.find(InputBlock.Item).length).toEqual(5)
        expect(wrapper.find(InputMessage).length).toEqual(0)
        expect(wrapper.find(TextInput).length).toEqual(1)
        expect(wrapper.find(Recaptcha).length).toEqual(1)
    })
    // it('render Component with errors', () => {
    //     // wrapper.set
    // })
})