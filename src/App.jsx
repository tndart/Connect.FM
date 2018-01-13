import React, {Component} from 'react';
import NavigationBar from './components/navigation-bar';
import Intro from './components/Intro';
import MusicPlayer from './components/MusicPlayer';
import Container from './components/Container';
import Login from './components/login';
import Signup from './components/signup';

import { connect } from 'react-redux';
import { PLAYLIST } from './actions/playlist';

const appName = 'Connect.FM';
const appMotto = 'Connect Life to Music';
const routes = [
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
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogon: null,
        };
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(PLAYLIST.fetchPlaylist());
    }

    loginCallback(){
        console.log("callback " + JSON.parse(localStorage.getItem('googleLoginData')));
    }

    render() {

        return (
            <div>
                <NavigationBar
                    appName={appName}
                    appMotto={appMotto}
                    routes={routes}
                    />
                {
                    !this.state.userLogon && 
                    <Container>
                            <Login google callback={this.loginCallback}>
                            
                            </Login>
                    </Container>
                }
                <Container>
                    <MusicPlayer components={['play', 'next', 'prev']} playlist={this.props.playlist.playlist}></MusicPlayer>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { playlist } = state
    
    return {
        playlist
    }
}

export default connect(mapStateToProps)(App);
