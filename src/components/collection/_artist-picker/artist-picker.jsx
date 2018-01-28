import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from '../index';
import { getTopArtistsByTags } from '../../../actions/artists'
import { Link } from 'react-router-dom'
import util from '../../../util/componentExtender'

/* UI component only , used for style a basic container in app  */
class ArtistPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        const { dispatch, tagsChecked, tagsUnchecked } = this.props

        if ((tagsChecked && tagsChecked.length > 0) || (tagsUnchecked && tagsUnchecked.length > 0)) {
            console.info('ArtistPicker:: componentDidMount')
            dispatch(getTopArtistsByTags(tagsChecked, tagsUnchecked))
        }
    }

    componentDidUpdate(prevProps, prevState){      
        if (!this.props.tagsChecked.equals(prevProps.tagsChecked) ||
            !this.props.tagsUnchecked.equals(prevProps.tagsUnchecked)){
                console.info('ArtistPicker:: componentDidUpdate')
                const { dispatch, tagsChecked, tagsUnchecked } = this.props
                dispatch(getTopArtistsByTags(tagsChecked, tagsUnchecked))
        }
    }

    clickHandler(e, props) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const showed = () => {
            if (this.props.artists && this.props.artists.length > 0) {
                return ( <ImagePicker array={this.props.artists} onClick={this.clickHandler}></ImagePicker> )
            }
            else {
                return ( <div> Please pick some genres at <Link to='/genres'> Genre page </Link> </div> )
            }
        }

        return (
            <div>
                { showed() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const artists = state.artists.list
    const tagsChecked = state.tags.topTags.filter(tag => tag.isChecked === true)
    const tagsUnchecked = state.tags.topTags.filter(tag => tag.isChecked === false)
    
    return {
        artists,
        tagsChecked,
        tagsUnchecked
    }
}

export default connect(mapStateToProps)(ArtistPicker);