
import React, {Component} from 'react';

/* UI component only , used for style a basic container in app  */
class About extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <Container>
                <Intro>
                    <h4>
                        Who we are
                    </h4>
                    <div>
                        We are a 5 students from 'Colman - The Collage of Management Academic Studies',<br/>
                        As part of our graduate project, we are trying to let you find your next music
                        without search all over the internet.
                        <br/>All you need is to signup, answer to 3 questions and PLAY for life.<br/>
                        <b>We can assure you - you shouldn't search for a music ever.</b>
                    </div>
                </Intro>
            </Container>
        )
    }
}

export default Container;



