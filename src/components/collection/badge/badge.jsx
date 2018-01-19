import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* UI component only , to display a badge with caption and ability to mark it as checked*/
export default class Badge extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e){
        if (this.props.onClick) {
            this.props.onClick(e, this.props);
        }
    }

    render() {
        return (
            <div style={{"display" : "inline-block"}}>
                <div key={this.props._id} className={'badge tag ' + this.props.className} onClick={this.clickHandler}> 
                { 
                    this.props.name.toUpperCase() 
                }
                </div>
                { 
                    this.props.isChecked &&
                        <div className='checked'></div> 
                }
            </div>

        )
    }
}

Badge.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool
}
