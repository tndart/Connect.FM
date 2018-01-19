import React, { Component } from 'react'
import { Image } from '../index'

/* UI component only , used for style a basic container in app  */
export default class ImagePicker extends Component {
    constructor(props) {
        super(props)

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e, props){
        console.log(`Image number ${props.oId} with the name ${props.title} clicked ${props.isChecked}!`)

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
                        return ( 
                            <Image 
                                className = "col-3 col-sm-2" 
                                checkedAction 
                                onClick = {this.clickHandler} 
                                _id = { obj._id }
                                key = { key } 
                                src = { obj.src } 
                                title = { obj.name }
                                isChecked = { obj.isChecked }> 
                            </Image> 
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

