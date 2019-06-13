import React from 'react';
import HeaderComponent from "./components/HeaderComponent";
import SinglePostComponent from "./components/SinglePostComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import SinglePostHardCodedComponent from "./components/SinglePostHardCodedComponent";

export default class MainComponent extends React.Component {
    isScrolledRecently = false;

    constructor() {
        super(...arguments);

        this.state = {
            stickyNavbar: false
        }
    }

    componentDidMount() {
        window.onscroll = (event) => {
            if (this.isScrolledRecently === true) {
                window.setTimeout(() => {
                    this.isScrolledRecently = false;
                }, 500);
            } else {
                this.isScrolledRecently = true;

                if (event.srcElement.scrollingElement.scrollTop > this.state.scrollTop || event.srcElement.scrollingElement.scrollTop === 0) {
                    this.setState({
                        scrollTop: event.srcElement.scrollingElement.scrollTop,
                        stickyNavbar: false
                    });
                } else {
                    this.setState({
                        scrollTop: event.srcElement.scrollingElement.scrollTop,
                        stickyNavbar: true
                    });
                }
            }

            if (event.srcElement.scrollingElement.scrollTop === 0) {
                this.setState({
                    scrollTop: event.srcElement.scrollingElement.scrollTop,
                    stickyNavbar: false
                });
            }
        };
    }

    render() {
        return (
            <Router>
                <HeaderComponent sticky={this.state.stickyNavbar}/>

                <Route exact path="/" component={HomeComponent}/>
                <Route path="/single/:id" component={SinglePostComponent}/>
                <Route path="/single-hard" component={SinglePostHardCodedComponent}/>

                <FooterComponent/>
            </Router>
        );
    };
}
