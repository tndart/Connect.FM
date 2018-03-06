import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom'

import { setValueOrDefault } from '../../util/componentExtender.js'
import '../../stylesheets/app.css';

class NavigationBarOld extends Component {
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
            : this.state.homeLink)
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

        let searchBar = null;
        if (this.state.searchBar) {
            searchBar = this.showSearchBar();
        }

        return (
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <button
                        className="navbar-toggler navbar-toggler-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-brand">
                        <a className="app-brand" href={this.state.homeLink}>{this.state.appName}</a>
                        <div className="app-motto">
                            {this.state.appMotto}
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            {this
                                .state
                                .routes
                                .map((item, index) => {
                                    return (
                                        <li key={index} className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                            <NavLink className="nav-link" to={item.link}>{item.name}</NavLink>
                                        </li>
                                    )
                                })
    }
                        </ul>

                        {searchBar}
                    </div>

                    <div className="navbar-nav pull-right">
                        { this.props.rightSide ? this.props.rightSide : "" }
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationBarOld;
