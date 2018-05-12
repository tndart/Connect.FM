

import React, { Component } from 'react'
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'
import { withRouter } from 'react-router'

import Container from '../container'
import { ArtistPicker } from '../collection/index';

import Button from 'material-ui/Button';
import Actions from '../../actions';
import * as Helpers from '../../util/helpers';

/* UI component only , used for style a basic container in app  */
class ArtistsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.onClickHandler = this.onClickHandler.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(Actions.getTopArtistsByTags())
    }

    onClickHandler(e){
        const { dispatch, list, history } = this.props

        const selectedArtists = list.filter(item => item.isChecked).map((item, pos) => item._id);    
        dispatch(Actions.updatePreferences(undefined, selectedArtists));

        history.push('/player')
    }

    render() {

        return (
            <Container>
                <div className="row">
                    <div className="col">
                        <Link to="/genres">                        
                            <Button style={{float: "left"}} variant="raised" color="primary"> 
                                Back 
                            </Button>    
                        </Link>
                    </div>
                    <div className="col align-self-center">
                    <h4 style={{textAlign: "center"}}> Artists: </h4>
                    <br/>
                    </div>
                    <div className="col">
                        <Button style={{float: "right"}} variant="raised" color="primary" onClick={this.onClickHandler}> 
                            Procced 
                        </Button>    
                    </div>
                </div>
                <div className="row">         
                        <div className="col">         
                            <ArtistPicker></ArtistPicker>
                        </div>
                    </div>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const { list } = state.artists
    const { user } = state

    if (user && user.preferences && user.preferences.artists && user.preferences.artists.length > 0 && list && list.length > 0){
        const artists = user.preferences.artists;
        for(let index = 0; index < artists.length; index++){
            const currArtist = artists[index];
            const indexFound = list.findIndex(item => item._id === currArtist._id);

            if (indexFound !== -1){
                let updated = list[indexFound];
                if (updated.isChecked !== false){
                    updated.isChecked = true;
                }
                list[indexFound] = updated;
            }
        }
    }

    return {
        list
    }
}


export default withRouter(connect(mapStateToProps)(ArtistsPage))




