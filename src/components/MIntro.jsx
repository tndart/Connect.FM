import React, {
    Component
} from 'react';

class MIntro extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }

    render() {
        return ( 
            <div className="mContainer">
                <div className="row align-items-center justify-content-center">
                    <div className="col">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default MIntro;
