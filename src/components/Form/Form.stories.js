import React from 'react';
import { storiesOf } from '@storybook/react';
import { DynamicForm } from '../../index.js';

storiesOf('DynamicForm', module)
.addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => 
    <DynamicForm
        fields={[
            {
                label: 'First Name',
                type: 'input',
                name: 'firstName',
                value: '',
                classNames: "tetx",
                placeholder: 'placeHolder',
                required: true,
            },            
        ]}
        validation={{}}
    />,
  )