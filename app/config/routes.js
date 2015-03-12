var React = require('react');
var Main = require('../components/Main');
var Test = require('../components/Test');

var Home = require('../components/Home');
var Profile = require('../components/Profile')
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <Route name="test" path="test/" handler={Test} />
    <DefaultRoute handler={Home} />
  </Route>
);