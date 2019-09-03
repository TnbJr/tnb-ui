import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonContainer } from '../../index.js';
storiesOf('Button', module)
.addParameters({
    info: {
      inline: true,
      text: `
      Override these SASS variables to change the default look of the component \n
      $button--color: $secondary-color !default; \n
      $button--hover-color: $secondary-color-dark !default; \n
      $button--text-color: #fff !default; \n
      $button--mod-transparent--text-color: $gray-dark !default; \n
      $button--mod-transparent--hover-text-color: $gray-extra-dark !default; \n
      $button--height: $element-height--standard !default; \n
      $button--big-height: $element-height--big !default; \n
      $button--huge-height: $button--big-height * 1.3 !default; \n
      $button--small-height: 20px !default; \n
    `
    },
  })
  .add('default', () => 
    <Button>Hello Button</Button>,
  )
  .add('small', () => (
    <Button small>Small Button</Button>
  ))
  .add('big', () => (
      <Button big>Big Button</Button>
  ))
  .add('outline', () => (
    <Button darkoutline>Outline Button</Button>
  ))
  .add('transparent', () => (
    <Button transparent>transparent Button</Button>
  ))
  .add('stretch', () => (
    <Button stretch>stretch Button</Button>
  ))
  .add('warning', () => (
    <Button warning>warning Button</Button>
  ))
  .add('success', () => (
    <Button success>Success Button</Button>
  ))
  .add('cancel', () => (
    <Button cancel>Success Button</Button>
  ))
  .add('link', () => (
    <Button link>Link Button</Button>
  ))
  .add('highlight', () => (
    <Button highlight>highlight Button</Button>
  ))
  .add('Button Container default', () => (
    <ButtonContainer>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
    </ButtonContainer>
  ))
  .add('Button Container centered', () => (
    <ButtonContainer centered>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
    </ButtonContainer>
  ))
  .add('Button Container right', () => (
    <ButtonContainer right>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
    </ButtonContainer>
  ))

