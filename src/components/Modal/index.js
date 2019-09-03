import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.onClose = this.onClose.bind(this);
    }

    onClose(){
        console.log("yurr")
        this.setState((state) => ({isModalOpen: false}))
    }
    render(){
        const { active, title, onClose, children } = this.props;
        const classNames = className("overlay", {"active": active})
        return(
            <div className={classNames}>
            <div className="modal">
                <a className="modal--close-link" onClick={this.onClose}>
                    {/* <Close /> */}
                </a>
                <div className="modal--content-container">
                    <div className="modal--title-bar">
                        <h1 className="modal--title">{title}</h1>
                    </div>
                    <div className="modal--content">
                        {children}
                    </div>
                    {/* <div className="modal--content" id={`${dashify(title)}-modal`}>
                        {withoutTypes(children, Modal.Buttons)}
                    </div>
                    {modalButtons} */}
                </div>
            </div>
        </div>
        )
    }
}

Modal.propTypes = {
	title: PropTypes.string,
	active: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
}

Modal.Buttons = ({children}) => <div className="modal--buttons">{children}</div>
Modal.Buttons.displayName = 'Modal.Buttons'

export default Modal
