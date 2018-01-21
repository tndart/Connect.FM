import React, {Component} from 'react';

/* UI component only , used for style a basic container in app  */
class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='container custom-container'>
                {this.props.children}
            </div>
        )
    }
}

export default Container;
