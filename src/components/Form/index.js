import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import Recaptcha from "react-recaptcha";
import { TextInput, InputMessage, InputBlock, Button, Select, TextArea, Checkbox } from '../../index'

class DynamicForm extends React.Component {
    renderButton(input){
        const { name, label, type, btnType } = input;
        return(
            <>
                <InputBlock.Buttons>
                    <Button form type={btnType}>
                        {label}
                    </Button>
                </InputBlock.Buttons>
            </>
        )
    }
    renderReCaptca(input){
        const { name, label, siteKey } = input;
        return(
            <>
                <Field
                    name={name}
                    render={props => {
                        const { field, form: { errors, setFieldValue, touched }} = props;
                        return (
                            <InputBlock.Item label={label}>
                                <Recaptcha
                                    // sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                                   sitekey={siteKey}
                                    render="explicit"
                                    //   theme="dark"
                                    verifyCallback={(response) => { 
                                        // console.log(response, "this is a response")
                                        setFieldValue("recaptcha", response); 
                                    }}
                                    onloadCallback={() => { console.log("done loading!"); }}
                                /> 
                                {errors[name] && touched[name]  && 
                                    <div className='validation-item--message-container'>
                                        <InputMessage message={{"message": errors[name], "severity": "error"}} />
                                    </div>
                                }
                            </InputBlock.Item>
                        )
                    }}
                />
            </>
        )
    }
    renderCheckBox(input){
        const { name, label } = input;
        return(
            <>
                <Field
                    name={name}
                    render={(props) => {
                        const { field, form: { errors, touched } } = props;
                        return(
                            <InputBlock.Item label={label}>
                                <Checkbox
                                    name={name}
                                    {...field}
                                />
                                {errors[name] && touched[name]  && 
                                            <div className='validation-item--message-container'>
                                                <InputMessage message={{"message": errors[name], "severity": "error"}} />
                                            </div>
                                }
                            </InputBlock.Item>
                        )
                    }}
                />
            </>
        )  
    }
    renderTextArea(input){
        const { name, label, required, placeholder, classNames, description} = input;
        return(
            <>
                <Field
                    name={name}
                    render={(props) => {
                        const { field, form: { errors, touched} } = props;
                        return(
                            <InputBlock.Item label={label} description={description}>
                                <TextArea
                                    classNames={classNames}
                                    placeholder={placeholder}
                                    {...field}
                                />
                                {errors[name] && touched[name]  && 
                                            <div className='validation-item--message-container'>
                                                <InputMessage message={{"message": errors[name], "severity": "error"}} />
                                            </div>
                                }
                            </InputBlock.Item>
                        )
                    }}
                />
            </>
        )
    }

    renderSelect(input){
        const { name, label, options, required, placeholder, classNames } = input;
        return(
            <>
                <Field
                    name={name}
                    render={(props) => {
                        const { field, form: { errors, setFieldValue, touched }} = props;
                        return(
                            <InputBlock.Item label={label}>
                                <Select 
                                    {...field}
                                    classNames={classNames}
                                    options={options}
                                    required={required}
                                    placeholder={placeholder}
                                    onChange={e => setFieldValue(name, e.target.value)}
                                />
                                {errors[name] && touched[name]  && 
                                    <div className='validation-item--message-container'>
                                        <InputMessage message={{"message": errors[name], "severity": "error"}} />
                                    </div>
                                }
                            </InputBlock.Item>       
                        )
                    }}
                />
            </>
        )
    }
    renderInputFields(input){
        const { name, type, label, placeholder, classNames, description } = input;
        return (
            <Field 
                name={name}
                render={(props) => {
                    const { field, form: { errors, touched }} = props;
                    return(
                        <InputBlock.Item label={label} description={description}>
                            <TextInput
                                stretch
                                classNames={classNames}
                                type={type}
                                placeholder={placeholder}
                                {...field} 
                                {...props}
                            />
                            {errors[name] && touched[name]  && 
                                <div className='validation-item--message-container'>
                                    <InputMessage message={{"message": errors[name], "severity": "error"}} />
                                </div>
                            }
                        </InputBlock.Item>
                    )
                }}
            />
        )
    }

    renderFields(inputs) {
        return inputs.map(input => {
            const { type } = input;
            if(type === 'select'){
                return this.renderSelect(input);
            }
            if(type === 'textarea'){
                return this.renderTextArea(input);
            }
            if(type === 'checkbox'){
                return this.renderCheckBox(input);
            }
            if(type === 'recaptcha'){
                return this.renderReCaptca(input);
            }
            if(type === 'button'){
                return this.renderButton(input);
            }
            return this.renderInputFields(input);
        })
    }

    getInitialValues(inputs) {
        const initalValues = {};
        inputs.forEach(field => {
            if(!initalValues[field.name]) {
                initalValues[field.name] = field.value
            }
        })
        return initalValues
    }

    render() {
        const { fields, validation, classNames } = this.props;
        const initialValues = this.getInitialValues(fields);
        const classes = cx(classNames)
        return(
            <>
                <Formik
                    onSubmit={(values) => {console.log("onSubmit", values)}}
                    validationSchema={validation}
                    initialValues={initialValues}
                    render={(form) => {
                        return(
                            <form onSubmit={form.handleSubmit} className={classes}>
                                <InputBlock narrow>
                                    {this.renderFields(fields)}
                                </InputBlock>
                            </form>
                        )
                    }}
                />
            </>
        )
    }

}
export default DynamicForm;

DynamicForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    validation: PropTypes.object.isRequired,
    classNames: PropTypes.string
}

DynamicForm.defaultProps ={
    fields: [],
    validation: {},
    classNames: ''
}