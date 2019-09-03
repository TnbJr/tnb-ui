import React from 'react';
import { CheckboxGroup } from '../../index.js'

export default () => (
    <div>
        <CheckboxGroup stacked
             options={['Free Rent', 'Tenant Improvements']}
        />
    </div>
  )