import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "Nothing to see here, go and see cats instead."
        }
    }
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>seans reactjs nodejs mongodb boilerplate</h1>
                    <p>Boilerplate for ReactJS, NodeJS and MongoDB.</p>
                    <p>Includes Gulp Minify, Uglify, Concat, Mocha and Chai Tests</p>
                </div>
                <h1>{this.state.description}</h1>
            </div>
        );
    }
}
export default Home;