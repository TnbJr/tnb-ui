import React from 'react';
import { RadioGroup } from '../../index.js'

export default () => (
    <div>
        <RadioGroup
            id='radio-group'
            value='Pizza'
            options={['Pizza', 'Bagels']} 
        />

        <RadioGroup
            stacked
            id='radio-group'
            value='Pizza'
            options={['Pizza', 'Bagels']} 
        />    

        {/* <CheckboxGroup stacked
             options={['Free Rent', 'Tenant Improvements']}
        /> */}
    </div>
  )