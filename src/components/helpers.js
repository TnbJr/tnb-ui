import React from 'react'
import PropTypes from 'prop-types'
// import ReactTooltip from 'react-tooltip'
import {Info} from './Icons'
// import activateable from '../higher-order/activateable.jsx'
import getMods from '../support/mods'
import {exists, switchiff} from '../util'

/*
 * Wrapper
 */

export const Wrapper = ({children}) => <div className="wrapper">{children}</div>

/*
 * TextBlock
 */

export const TextBlock = ({children}) => (
	<div className="text-block">{children}</div>
)

TextBlock.Intro = ({children, ...props}) => {
	const classes = ['intro', ...getMods([], props, 'centered')]
	return <p className={classes.join(' ')}>{children}</p>
}

TextBlock.Intro.displayName = 'TextBlock.Intro'

TextBlock.Intro.propTypes = {
	centered: PropTypes.bool,
}

/*
 * Headings
 */

const Heading = type => ({id, children, ...props}) => {
	const element = {type}
	const classes = [...getMods([], props, 'centered')]
	return (
		<element.type id={id}>
			{children}
		</element.type>
	)
}

export const Heading1 = Heading('h1')
Heading1.displayName = 'Heading1'
export const Heading2 = Heading('h2')
Heading2.displayName = 'Heading2'
export const Heading3 = Heading('h3')
Heading3.displayName = 'Heading3'
export const Heading4 = Heading('h4')
Heading4.displayName = 'Heading4'
export const Heading5 = Heading('h5')
Heading5.displayName = 'Heading5'
export const Heading6 = Heading('h6')
Heading6.displayName = 'Heading6'

/*
 * Quotes
 */

export const Quote = ({attribution, children, ...props}) => (
	<div className={['quote', ...getMods([], props, 'centered')].join(' ')}>
		<p className="quote--text">{children}</p>
		<p className="quote--attribution">{attribution}</p>
	</div>
)

Quote.propTypes = {
	attribution: PropTypes.string,
	centered: PropTypes.bool,
}

/*
 * Links
 */

export const Link = ({disabled, ...props}) => (
	<a
		href="javascript:void(0)"
		{...props}
		aria-disabled={disabled}
		disabled={disabled}
		tabIndex={disabled ? -1 : null}
		onClick={disabled ? () => false : props.onClick}
	/>
)

Link.propTypes = {
	disabled: PropTypes.bool,
}

// export const NavLink = activateable(Link)

/*
 * Lists
 */

export const List = ({ordered, children, className, ...props}) => {
	const classes = [className, ...getMods([], props, 'small')].filter(exists)
	const Tag = ordered ? 'ol' : 'ul'
	const {small, ...rest} = props

	return (
		<Tag className={classes.length ? classes.join(' ') : null} {...rest}>
			{React.Children.toArray(children)
				.filter(exists)
				.map((child, index) => <li key={index}>{child}</li>)}
		</Tag>
	)
}

List.propTypes = {
	ordered: PropTypes.bool,
	small: PropTypes.bool,
}

/*
 * UI Bits
 */

export const Tag = ({children, ...props}) => {
	const classes = ['tag', ...getMods([], props, 'clear', 'highlight')]

	return <span className={classes.join(' ')}>{children}</span>
}

Tag.propTypes = {
	clear: PropTypes.bool,
	highlight: PropTypes.bool,
}

export const Badge = ({children, ...props}) => {
	const classes = ['badge', ...getMods([], props, 'warning', 'error', 'small')]
	const {error, warning, small, ...rest} = props

	return (
		<Link {...rest} className={classes.join(' ')}>
			{children}
		</Link>
	)
}

Badge.propTypes = {
	...Link.propTypes,
	warning: PropTypes.bool,
	error: PropTypes.bool,
	small: PropTypes.bool,
}

export const CombinedBadge = ({children}) => {
	return <div className="combined-badge">{children}</div>
}

CombinedBadge.propTypes = {}

// export const Tooltip = ({Icon, title, place, children, ...props}) => {
// 	const classes = ['tooltip', ...getMods([], props, 'plain', 'error', 'small')]

// 	const type =
// 		exists(Icon) && exists(title) ? 'hybrid' : exists(Icon) ? 'icon' : 'text'

// 	const randomID = 'tooltipID-' + Math.floor(Math.random() * 1000000000)

// 	return (
// 		<div className={classes.join(' ')}>
// 			<a data-tip={children} className="tooltip--trigger" data-for={randomID}>
// 				{switchiff(type, [
// 					{
// 						case: 'text',
// 						run: () => <span className="tooltip--trigger-text">{title}</span>,
// 					},
// 					{
// 						case: 'icon',
// 						run: () => (
// 							<span className="tooltip--trigger-icon">
// 								<Icon />
// 							</span>
// 						),
// 					},
// 					{
// 						case: 'hybrid',
// 						run: () => (
// 							<span className="tooltip--trigger-hybrid">
// 								<Icon /> {title}
// 							</span>
// 						),
// 					},
// 				])}
// 			</a>

// 			<ReactTooltip
// 				id={randomID}
// 				place={place}
// 				type="dark"
// 				effect="solid"
// 				html={true}
// 				multiline={true}
// 			/>
// 		</div>
// 	)
// }

// Tooltip.propTypes = {
// 	Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
// 	title: PropTypes.string,
// 	place: PropTypes.string,
// 	plain: PropTypes.bool,
// 	error: PropTypes.bool,
// 	small: PropTypes.bool,
// }
