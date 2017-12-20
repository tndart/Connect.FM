import React, {Component} from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="row align-items-center justify-content-center">
                <div className="col">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Intro;
