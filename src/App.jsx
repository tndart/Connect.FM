import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import MusicPlayer from './components/MusicPlayer';
import Container from './components/Container';

import {connect} from 'react-redux';
import {playMusic} from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: 'Connect.FM',
            appMotto: 'Connect Life to Music',
            routes: [
                {
                    "name": "Who We Are",
                    "link": "#about"
                }, {
                    "name": "Our Music",
                    "link": "#music"
                }, {
                    "name": "Products",
                    "link": "#products"
                }, {
                    "name": "Contact",
                    "link": "#contact"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <NavigationBar
                    appName={this.state.appName}
                    appMotto={this.state.appMotto}
                    routes={this.state.routes}
                    search/>

                <Container>
                    <Intro>
                        <h4>
                            Who we are
                        </h4>
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                        right at the coast of the Semantics, a large language ocean.
                    </Intro>
                </Container>

                <Container>
                    <MusicPlayer components="[play, prev, next, playlist]"></MusicPlayer>
                </Container>

            </div>
        )
    }
}

export default connect(null, {playMusic})(App);
