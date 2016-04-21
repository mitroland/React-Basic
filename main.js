var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <header style={{backgroundColor: '#F00'}}>
        <HelloMessage name="MasRol" />
      </header>
    )
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('main')
);
