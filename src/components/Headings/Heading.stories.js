import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from './index.js';

storiesOf('Heading', module)
  .addParameters({
    info: {
      inline: true,
    },
    })
    .add('H1 Heading', () => 
        <Heading1>H1 Heading</Heading1>
    )
    .add('H2 Heading', () => 
        <Heading2>H1 Heading</Heading2>
    )
    .add('H3 Heading', () => 
        <Heading3>H1 Heading</Heading3>
    )
    .add('H4 Heading', () => 
        <Heading4>H1 Heading</Heading4>
    )
    .add('H5 Heading', () => 
        <Heading5>H1 Heading</Heading5>
    )
    .add('H6 Heading', () => 
        <Heading6>H1 Heading</Heading6>
    )