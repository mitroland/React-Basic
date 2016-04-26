var React     = require('react');
var ReactDOM  = require('react-dom');
var Router    = require('react-router').Router;
var Route     = require('react-router').Route;
var Link      = require('react-router').Link;
var browserHistory      = require('react-router').browserHistory;

var App       = React.createClass({
  /*getInitialState: function() {

  },ponentDidMount: function()
  {

  },*/
  render: function() {
    return (
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/users/roland">roland</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

var LoginPage = React.createClass({
  /*getInitialState: function() {

  },ponentDidMount: function()
  {

  },*/
  render: function() {
    return (
      <h2>Login Page</h2>
    );
  }
});

var DashboardPage = React.createClass({
  /*getInitialState: function() {

  },ponentDidMount: function()
  {

  },*/
  render: function() {
    return (
      <h2>Dashboard Page</h2>
    );
  }
});

var ProfilePage = React.createClass({
  /*getInitialState: function() {

  },ponentDidMount: function()
  {

  },*/
  render: function() {
    return (
      <h2>Profile Page: {this.props.params.userId}</h2>
    );
  }
});

var NotFoundPage = React.createClass({
  /*getInitialState: function() {

  },ponentDidMount: function()
  {

  },*/
  render: function() {
    return (
      <h2>404</h2>
    );
  }
});

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginPage} />
        <Route path="home" component={DashboardPage} />
        <Route path="users" component={ProfilePage}>
          <Route path="/users/:userId" component={ProfilePage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  ),
  document.getElementById('main')
);
