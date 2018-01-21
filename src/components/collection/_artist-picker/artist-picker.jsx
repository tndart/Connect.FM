import React, { Component } from 'react';
import { ImagePicker } from '../index';
import { connect } from 'react-redux';
import { getDemo, checkingToggle, getTopArtistsByTags } from '../../../actions/artists'

/* UI component only , used for style a basic container in app  */
class ArtistPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        const { dispatch, tagsChecked} = this.props

        if (tagsChecked && tagsChecked.length > 0){
            dispatch(getTopArtistsByTags(tagsChecked));
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
        
        if (prevProps.amountOfTags !== this.props.amountOfTags){
            const { dispatch, tagsChecked, tagsUnchecked } = this.props
            dispatch(getTopArtistsByTags(tagsChecked, tagsUnchecked));
        }
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
    const tagsChecked = state.tags.topTags.filter(tag => tag.isChecked === true);
    const tagsUnchecked = state.tags.topTags.filter(tag => tag.isChecked === false)
    const amountOfTags = tagsChecked.length;
    
    return {
        artists,
        tagsChecked,
        tagsUnchecked,
        amountOfTags
    }
}

export default connect(mapStateToProps)(ArtistPicker);