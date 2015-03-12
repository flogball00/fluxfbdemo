var React = require('react');
var Home = require('./Home');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SearchGithub = require('./SearchGithub');

var Test = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                Testing
            </div>
        )
    }
});

module.exports = Test;