import React from 'react'
import PropTypes from 'prop-types'
// import {ColorLight} from '../../../svgs/logo.jsx'
// import Footer from '../Footer'
import {iff} from '../../util'
// import './message-page.scss'

const MessagePage = ({title, children}) => (
	<div className="message-page">
		<div className="message-page--header">
			<div className="message-page--logo">
				{/* <ColorLight /> */}
			</div>
		</div>

		<div className="message-page--main">
			<div className="message-page--content">
				{iff(title, () => (
					<div className="message-page--content--title">{title}</div>
				))}
				{children}
			</div>
		</div>

		<div className="message-page--footer">
			{/* <Footer dark /> */}
		</div>
	</div>
)

MessagePage.propTypes = {
	title: PropTypes.string,
}

export default MessagePage
