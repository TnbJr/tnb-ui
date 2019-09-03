import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './index.js';

storiesOf('TextInput', module)
    .addParameters({
        info: {
        inline: true,
        },
    })
    .add('default', () => (
        <TextInput placeholder='100'/>
    ))
    .add('tiny', () => (
        <TextInput  tiny placeholder='tiny' />
    ))
    .add('small', () => (
        <TextInput  small placeholder='small' />
    ))
    .add('long', () => (
        <TextInput long placeholder='long' />
    ))
    .add('big', () => (
        <TextInput big placeholder='big' />
    ))
    .add('stretch', () => (
        <TextInput stretch placeholder='stretch' />
    ))
    .add('password', () => (
        <TextInput password placeholder='password' />
    )) 
    .add('disabled', () => (
        <TextInput disabled placeholder='disabled' />
    ))