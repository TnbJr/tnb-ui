import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 

function loadStories() {
    const req = require.context('../src/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)