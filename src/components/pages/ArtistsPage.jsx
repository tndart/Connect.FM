

import React, { Component } from 'react'
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'

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

    onClickHandler(e){
        const { dispatch, list } = this.props

        const selectedArtists = list.filter((item, pos) => {
            if (item.isChecked === true){
                return item._id;
            }
        })
    
        dispatch(Actions.updatePreferences(undefined, selectedArtists));

        Helpers.getHistory().push('/player')
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

    return {
        list
    }
}


export default connect(mapStateToProps)(ArtistsPage)




