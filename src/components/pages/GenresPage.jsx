
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

    onClickHandler(e){
        const { dispatch, topTags } = this.props

        const selectedTags = topTags.filter((item, pos) => {
            if (item.isChecked === true){
                return item._id;
            }
        })
    
        dispatch(Actions.updatePreferences(selectedTags));

        this.props.history.push('/artists')
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
    const { topTags } = state.tags
    
    return {
        topTags 
    }
}

export default withRouter(connect(mapStateToProps)(GenresPage))


