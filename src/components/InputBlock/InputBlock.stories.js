import React from 'react';
import { storiesOf } from '@storybook/react';
import InputBlock from './index.js';
import TextInput from '../TextInput'

storiesOf('InputBlock', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => ( 
    <InputBlock>
        <InputBlock.Item label="Name">
            <TextInput />
        </InputBlock.Item>
    </InputBlock>
  ))
  .add('narrow', () => ( 
    <InputBlock narrow>
        <InputBlock.Item label="Name">
            <TextInput />
        </InputBlock.Item>
    </InputBlock>
  ))