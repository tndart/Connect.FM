
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router-dom/Link'

import Container from './container'
import { BadgePicker } from './collection/index'

/* UI component only , used for style a basic container in app  */
class GenresPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <Container>
                <div className="row">
                    <div className="col">
                        <Link style={{float: "left"}} className="btn btn-primary" to="/">Back</Link>
                    </div>
                    <div className="col">
                        <h4 style={{textAlign: "center"}}>Pick your genres:</h4>
                    <br/>
                    </div>
                    <div className="col">
                        <Link style={{float: "right"}} className="btn btn-primary" to="/artists">Proceed</Link>
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

export default connect(mapStateToProps)(GenresPage)


