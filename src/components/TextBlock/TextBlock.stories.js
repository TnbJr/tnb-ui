import React from 'react';
import { storiesOf } from '@storybook/react';
import TextBlock from './index.js';

storiesOf('TextBlock', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => 
    <TextBlock>
        {/* <TextBlock.Intro centered>
            Welcome to The Party
        </TextBlock.Intro> */}
        <p>We like, we like to party. We like, we like to party. -Party Parrot</p>
        <p> We like, we like to party. We like, we like to party. -Party Parrot</p>
    </TextBlock>,
    { info: {text: 'Text Block is a generic container for displaying "long-form," text-centric content. Use this wrapping container whenever you want classic, readable proportions for paragraphs and lists.'} }
  )