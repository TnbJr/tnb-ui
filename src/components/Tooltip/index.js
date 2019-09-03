import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import ReactTooltip from 'react-tooltip'
import { exists, switchiff } from '../../util'

const Tooltip = ({Icon, title, place, plain, error, small, children}) => {
    const classNames = className('tooltip',{
        'mod-plain': plain,
        'mod-error': error,
        'mod-small': small 
    })
	const type =
		exists(Icon) && exists(title) ? 'hybrid' : exists(Icon) ? 'icon' : 'text'

	const randomID = 'tooltipID-' + Math.floor(Math.random() * 1000000000)

	return (
		<div className={classNames}>
			<a data-tip={children} className="tooltip--trigger" data-for={randomID}>
				{switchiff(type, [
					{
						case: 'text',
						run: () => <span className="tooltip--trigger-text">{title}</span>,
					},
					{
						case: 'icon',
						run: () => (
							<span className="tooltip--trigger-icon">
								<Icon />
							</span>
						),
					},
					{
						case: 'hybrid',
						run: () => (
							<span className="tooltip--trigger-hybrid">
								<Icon /> {title}
							</span>
						),
					},
				])}
			</a>

			<ReactTooltip
				id={randomID}
				place={place}
				type="dark"
				effect="solid"
				html={true}
				multiline={true}
			/>
		</div>
	)
}

Tooltip.propTypes = {
	Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	title: PropTypes.string,
	place: PropTypes.string,
	plain: PropTypes.bool,
	error: PropTypes.bool,
	small: PropTypes.bool,
}

export default Tooltip;