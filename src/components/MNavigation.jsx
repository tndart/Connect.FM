import React, {Component} from 'react';
import {setValueOrDefault} from '../functions/componentExtender.js'

class MNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: [],
            appName: (props.appName === undefined
                ? "MyApp"
                : props.appName),
            appMotto: (props.appMotto === undefined
                ? "Motto"
                : props.appMotto),
            homeLink: "#",
            searchBar: props.search
        };

        this.state.routes = setValueOrDefault(this.state.routes, this.props.routes);

        this.state.homeLink = (this.state.routes[0] !== undefined
            ? this.state.routes[0].link
            : this.state.homeLink);
    }

    showSearchBar() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );

    }

    render() {

        var searchBar = null;

        if (this.state.searchBar) {
            searchBar = this.showSearchBar();
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-blue bg-blue fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-brand" href={this.state.homeLink}>{this.state.appName}</a>
                    <div className="appmotto">
                        {this.state.appMotto}
                    </div>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        {this
                            .state
                            .routes
                            .map((item, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href={item.link}>{item.name}</a>
                                    </li>
                                )
                            })
}
                    </ul>

                    {searchBar}
                </div>
            </nav>
        )
    }
}

export default MNavigation;

/*
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                  <div className="navbar-brand">
                      <a className="navbar-brand" href={this.state.homeLink}>{this.state.appName}</a>
                      <div className="appmotto"> {this.state.appMotto} </div>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        {
                            this.state.routes.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href={item.link}>{item.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0 btn-disabled" type="submit" disabled>Search</button>
                    </form>
                  </div>
                </nav>

*/
