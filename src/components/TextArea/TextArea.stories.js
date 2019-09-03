import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './index.js'

storiesOf('TextArea', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () =>
    <TextArea />
  )