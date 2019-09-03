import React from 'react';
import { storiesOf } from '@storybook/react';
import MessagePage from './index.js';

storiesOf('MessagePage', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => 
    <MessagePage>Hello Button</MessagePage>,
    // { info: {text: '☹️ no emojis'} }
  )
  .add('title', () => 
  <MessagePage title="Heres a title">Hello Button</MessagePage>,
  // { info: {text: '☹️ no emojis'} }
)