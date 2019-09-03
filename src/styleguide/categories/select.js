import React from 'react';
import { Select, MultiSelect, Icons } from '../../index.js'

export default () => (
    <div>
        <Select
            value="Volvo"
            disabled
            placeholder="placeholder"
            options={{
                volvo: 'Volvo',
                saab: 'Saab',
                mercedes: 'Mercedes',
                audi: 'Audi',
            }}
        />
        <Select
            value="Volvo"
            // disabled
            placeholder="placeholder"
            options={{
                volvo: 'Volvo',
                saab: 'Saab',
                mercedes: 'Mercedes',
                audi: 'Audi',
            }}
        />

            
        {/* <MultiSelect
            value="Volvo"
            disabled
            placeholder="placeholder"
            options={{
                volvo: 'Volvo',
                saab: 'Saab',
                mercedes: 'Mercedes',
                audi: 'Audi',
            }}
            /> */}
    </div>
)