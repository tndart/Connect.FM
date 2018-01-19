import React, { Component } from 'react';
import { ImagePicker } from '../index';
import { connect } from 'react-redux';
import { getDemo, checkingToggle } from '../../../actions/artists'

/* UI component only , used for style a basic container in app  */
class ArtistPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(getDemo());
    }

    clickHandler(e, props){
        const { dispatch } = this.props
        const newCheckedState = props.isChecked ? false : true;
        dispatch(checkingToggle(props._id, newCheckedState));

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <div>
                <ImagePicker array={this.props.artists} onClick={this.clickHandler}></ImagePicker>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const artists = state.artists.list;
    
    return {
        artists
    }
}

export default connect(mapStateToProps)(ArtistPicker);