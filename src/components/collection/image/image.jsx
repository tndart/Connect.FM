import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* UI component only , to display an image with caption and ability to mark it as checked*/
export default class Image extends Component {

    constructor(props) {
        super(props);
        
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e){
        if (this.props.onClick) {
            this.props.onClick(e, this.props);
        }    
    }

    render() {

        const showChecked = () => {
            if(this.props.isChecked){
                return(
                    <div className='check-mark-container'>
                        <i className="material-icons md-48 check-mark">check</i>
                    </div>
                )
            }
        }

        return (
            <div onClick={this.props.checkedAction ? this.clickHandler : this.props.onClick} className={this.props.className + ' image-link'} >
                <img className='image' alt={this.props.title} src={this.props.src} />
                <div className='title'> {this.props.title} </div>
                { showChecked() }
            </div>
        )
    }
}

Image.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    src: PropTypes.string,
    isChecked: PropTypes.bool
}
