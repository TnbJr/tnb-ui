import React from 'react'
import className from 'classnames';
import PropTypes from 'prop-types';

// import {Tooltip} from '../helpers.js'
import {Info} from '../Icons';
import {iff} from '../../util';
// import './_input-block.scss';

const InputBlock = ({children, narrow}) => {
    const classNames = className(
        'input-block',
        {
            'mod-narrow': narrow
        }
    )
	return <div className={classNames}>{children}</div>
}

InputBlock.propTypes = {
	narrow: PropTypes.bool,
}

InputBlock.Item = ({label, description, children}) => (
	<div className="input-block--item">
		<div className="input-block--item--label">
			<label>
				{iff(description, () => {
					// <Tooltip plain Icon={Info} title={label}>
					// 	{description}
					// </Tooltip>
					return(
						<>
							{label} <span className="input-block--item--label--description">({description})</span>
						</>
					)


				})}
				{iff(!description, () => label)}
			</label>
		</div>

		<div className="input-block--item--content">
			<div className="input-block--item--content--container">{children}</div>
		</div>
	</div>
)


InputBlock.Group = ({header, children}) => (
    <div className="input-block--group">
		<div className="input-block--group--header">
			{header}
		</div>
		<div className="input-block--group--content">
			{children}
		</div>
    </div>
)

InputBlock.Item.displayName = 'InputBlock.Item'

InputBlock.Item.propTypes = {
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
}

InputBlock.Buttons = ({children}) => (
	<div className="input-block--buttons">{children}</div>
)

InputBlock.Buttons.displayName = 'InputBlock.Buttons'

InputBlock.Or = () => <div className="input-block--or-divider" />

InputBlock.Or.displayName = 'InputBlock.Or'

export default InputBlock
