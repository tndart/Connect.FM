import React, {Component} from 'react';

/* UI component only , used for style a basic container in app  */
class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        var { children, className, style } = this.props
        if (!className) { className = '' }
        return (
            <div style={{style}} className={'container-fluid custom-container ' + className}>
                { children }
            </div>
        )
    }
}

export default Container;
