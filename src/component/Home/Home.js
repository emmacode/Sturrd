import React, { Component } from 'react'

import logo from "../../assets/img/logo.png";
import logomockup from "../../assets/img/logomock.png";
import location from "../../assets/img/location.svg";
import connnect from "../../assets/img/connect.svg";
import eating from "../../assets/img/eating.svg";
import locationmock from "../../assets/img/locationmock.svg";

class Home extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-light header">
                        <a className="navbar-brand header__logo-box">
                            <img src={logo} alt="Sturrd's logo" className="header__logo" />
                        </a>
                        <div >
                            <button className="sturrd__btn  sturrd__btn-orange btn--animated">Get the App</button>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 header-primary-1">
                                <h1 className="header-primary--text">
                                    <span className="header-primary--main">Smart, secure, and simply amazing.</span><br />
                                    <span className="header-primary--sub">Search one of a kind spots and then post a date request <br /> to people nearby.</span>
                                </h1>
                                <button className="get__sturrd-btn btn--orange btn--animated">Get Sturrd</button>
                            </div>
                            <div className="col-md-6 header-primary-2">
                                <img src={logomockup} alt="Sturrd's logo mockup" className="header-primary--image" />
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section__illustration">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center illustration__container">
                                <img src={location} alt="location illustration" className="illustration" />
                                <p className="illustration__text">Search Location and post date request</p>
                            </div>
                            <div className="col-md-4 text-center illustration__container">
                                <img src={connnect} alt="connect illustration" className="illustration" />
                                <p className="illustration__text">Connect with people nearby</p>
                            </div>
                            <div className="col-md-4 text-center illustration__container">
                                <img src={eating} alt="eating illustration" className="illustration" />
                                <p className="illustration__text">Accept date request and go in a date together</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section__third">
                    <div className="container">
                        <div className="row footer">
                            <div className="col-md-6 d-flex justify-content-center">
                                <img src={locationmock} alt="location mockup" className="section__third-image" />
                            </div>
                            <div className="col-md-6">
                                <h2>Get a Life</h2>
                                <p className="section__third-text">
                                    It allows people to select or search for a location and then post a date request to people nearby
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home;