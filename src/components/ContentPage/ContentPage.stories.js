import React from 'react';
import { storiesOf } from '@storybook/react';
import ContentPage from './index.js';

storiesOf('ContentPage', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => 
    <ContentPage>Hello Button</ContentPage>,
    // { info: {text: '☹️ no emojis'} }
  )