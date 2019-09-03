import React from 'react'
import PropTypes from 'prop-types'

const Spinner = () => (
	<svg className="spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
		<g>
			<path
				className="circle"
				d="M50 15A35 35 0 1 0 74.787 25.213"
				fill="none"
				stroke="#a8bbc7"
				strokeWidth="12px"
			/>
			<path className="arrow" d="M50 0L50 30L66 15L50 0" fill="#a8bbc7" />
		</g>
	</svg>
)

export default Spinner
