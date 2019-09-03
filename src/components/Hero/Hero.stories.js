import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from '../../index.js';

storiesOf('Hero', module)
.addParameters({
    info: {
      inline: true,
    },
  })

.add('Hero', () => (
    <Hero header="slime"/>
))