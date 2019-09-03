import React from 'react';
import { Notifications } from '../../index.js'

export default () => (
    <div>
        <Notifications.Item button={{"text": "Dismiss"}}>
            Here is some information
        </Notifications.Item>

        <Notifications.Item error button={{"text": "Dismiss"}}>
            Here is some information
        </Notifications.Item>

        <Notifications.Item warning button={{"text": "Dismiss"}}>
            Here is some information
        </Notifications.Item>

        <Notifications.Item highlight>
            Here is some information
        </Notifications.Item>
    </div>
  )