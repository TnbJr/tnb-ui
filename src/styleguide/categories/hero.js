import React from 'react';
import { Hero, Button } from '../../index.js'

export default () => (
    <div>
        <Hero
            header="Cultivating Lives For A Better Tomorrow"
            subHeader="Our mission and service is dedicated to enriching the lives of underprivileged
            children across the globe."    
        > 
          <Button styleName="hero-button" big={true}>Big Button</Button>
        </Hero>
    </div>
)
