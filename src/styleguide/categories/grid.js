import React from 'react'

import { Grid } from '../../index.js'

export default () => (
    <div>
        <Grid.Row>
            <Grid.Column sm={12}>
                <div className="col-contents"></div>
            </Grid.Column>
            <Grid.Column sm={6}>
                <div className="col-contents">6</div>
            </Grid.Column>
            <Grid.Column sm={6}>
                <div className="col-contents">6</div>
            </Grid.Column>
        </Grid.Row>
    </div>
  )