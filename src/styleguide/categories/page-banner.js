import React from 'react';
import {PageBanner} from '../../index.js'

export default () => (
    <div>
        <PageBanner>
            page banner
        </PageBanner>
        <PageBanner warning>
            warning page banner
        </PageBanner>
        <PageBanner error>
            error page banner
        </PageBanner>
        <PageBanner highlight>
            highlight page banner
        </PageBanner>
    </div>
  )