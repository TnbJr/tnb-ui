import React from 'react';
import { storiesOf } from '@storybook/react';
import { Test, Checkbox } from './index.js';

storiesOf('Checkbox', module)
.addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => 
    <Checkbox/>,
  )