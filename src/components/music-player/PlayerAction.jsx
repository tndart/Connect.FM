import React, {Component} from 'react'
import PropTypes, { element } from 'prop-types'
import SvgIcon from 'material-ui/SvgIcon'

class PlayerAction extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        var { children, onClick, className } = this.props

        return (
            <button onClick={onClick} className={'player-action ' + className}>
                { children }
            </button>
        )
    }
}

PlayerAction.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
}

export default PlayerAction;
