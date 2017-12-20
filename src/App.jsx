import React, {Component} from 'react';
import MNavigation from './components/MNavigation';
import MIntro from './components/MIntro';
import MPlayer from './components/MPlayer';
import {connect} from 'react-redux';
import {playMusic} from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: 'XMusic',
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
                <MNavigation
                    appName={this.state.appName}
                    appMotto={this.state.appMotto}
                    routes={this.state.routes}
                    search/>
                <MIntro>
                    <h4>
                        Join Us !
                    </h4>
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean. A small river named
                    Duden flows by their place and supplies it with the necessary regelialia. It is
                    a paradisematic country, in which roasted parts of sentences fly into your
                    mouth.
                </MIntro>

                <div className="mContainer">
                    <MPlayer components="[play, prev, next]"></MPlayer>
                </div>
            </div>
        )
    }
}

export default connect(null, {playMusic})(App);
