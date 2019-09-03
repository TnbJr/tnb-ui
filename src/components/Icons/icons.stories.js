import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICONS } from '../../constants'
import { Icon } from '../../index.js';

storiesOf('Icons', module)
    .add('default', () => (
        <Icon  icon={ICONS.CROSS}/>
    ))