import React, {Component} from 'react';

/* UI component only , used for style a basic container in app  */
class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        var containerStyle = {
            display: "block",
            position: "relative",
            top: "80px",
            padding: "30px",
            margin: "10px",
            "backgroundColor": "rgba(0, 0, 0, 0.3)",
            "borderRadius": "10px",
            color: "white"
        };

        return (
            <div style={containerStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Container;
