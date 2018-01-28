import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Image } from '../index'

import { checkingToggle } from '../../../actions/artists';

/* UI component only , used for style a basic container in app  */
class ImagePicker extends Component {
    constructor(props) {
        super(props)

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e, props){
        const { dispatch } = this.props
        const newCheckedState = props.isChecked ? false : true;
        dispatch(checkingToggle(props._id, newCheckedState));

        if (this.props.onClick) {
            this.props.onClick(e, props)
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                {
                    this.props.array && 
                    this.props.array.map((obj, key) => {
                        if (obj.pic){
                            return ( 
                                <Image 
                                    className = "col-4 col-sm-3 col-lg-2" 
                                    checkedAction 
                                    onClick = {this.clickHandler} 
                                    _id = { obj._id }
                                    key = { key } 
                                    src = { obj.pic } 
                                    title = { obj.name }
                                    isChecked = { obj.isChecked }> 
                                </Image> 
                            )
                        }
                        else {
                            console.info(`ImagePicker:: Cant show ${obj.name} (${obj._id}) because it missed a picture`);
                            return '';
                        }
                    })
                }
                </div>
            </div>
        )
    }
}

export default connect(null)(ImagePicker);