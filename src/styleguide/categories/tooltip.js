import React from 'react';
import { Tooltip, Icons } from '../../index.js'

export default () => (
    <div>
        <Tooltip title="hover over me">I got no icon. Deal with it.</Tooltip>
        <Tooltip Icon={Icons.Info}>I got no text. Deal with it.</Tooltip>
        <Tooltip Icon={Icons.Alert} title="hover over me">
			Icon AND text, so fancy
		</Tooltip>
        <Tooltip title="hover over me" plain>
			It is up to you how to style this trigger.
		</Tooltip>
        <Tooltip title="hover over me" error>
			Uh oh. You done goofed!
		</Tooltip>
        <Tooltip title="hover over me" small>
			Eep
		</Tooltip>
        <Tooltip title="hover over me" place="right">
			Over here!
		</Tooltip>
    </div>
)