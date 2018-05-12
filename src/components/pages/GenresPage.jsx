
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router-dom/Link'
import { withRouter } from 'react-router'

import Container from '../container'
import { BadgePicker } from '../collection/index'
import Button from 'material-ui/Button';
import Actions from '../../actions';
import * as Helpers from '../../util/helpers';


/* UI component only , used for style a basic container in app  */
class GenresPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.onClickHandler = this.onClickHandler.bind(this)
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(Actions.getTopTags());
    }

    onClickHandler(e){
        const { dispatch, history, topTags } = this.props

        const selectedTags = topTags.filter(item => item.isChecked).map((item, pos) => item._id);    
        dispatch(Actions.updatePreferences(selectedTags));

        history.push('/artists')
    }

    render() {

        return (
            <Container>
                <div className="row">
                    <div className="col-2">
                        <Link to="/">                        
                            <Button style={{float: "left"}} variant="raised" color="primary"> 
                                Back 
                            </Button>    
                        </Link>
                    </div>
                    <div className="col">
                        <h4 style={{textAlign: "center"}}>Genres:</h4>
                    <br/>
                    </div>
                    <div className="col-2">
                        <Button style={{float: "right"}} variant="raised" color="primary" onClick={this.onClickHandler}> 
                            Procced 
                        </Button>    
                    </div>
                </div>
                <div className="row">         
                        <div className="col">         
                            <BadgePicker list={this.props.topTags}></BadgePicker>
                        </div>
                    </div>
            </Container>
        )
    }
}


function mapStateToProps(state) {
    let { topTags } = state.tags
    
    const { user } = state

    if (user && user.preferences && user.preferences.genres && user.preferences.genres.length > 0 && topTags && topTags.length > 0){
        const genres = user.preferences.genres;
        for(let index = 0; index < genres.length; index++){
            const currGenre = genres[index];
            const indexFound = topTags.findIndex(item => item._id === currGenre._id);

            if (indexFound !== -1){
                let updated = topTags[indexFound];
                if (updated.isChecked !== false){
                    updated.isChecked = true;
                }
                topTags[indexFound] = updated;
            }
        }
    }

    return {
        topTags 
    }
}

export default withRouter(connect(mapStateToProps)(GenresPage))


