import React, {Component} from 'react';

/* UI component only , Should arrange the data as single-line slider */
/* NOT WORKING */
export default class LineGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='line-container'>
                <div className='line-slider'>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

