import React, {Component} from 'react'
import PropTypes, { element } from 'prop-types'

import PlayerAction from './PlayerAction'

class PlayerActionBar extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        let { children } = this.props

        return (
            <div className="player-actions">
                <div className="player-actions-container">
                    { children }
                </div>
            </div>
        )
    }
}

PlayerActionBar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PlayerActionBar;
