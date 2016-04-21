var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {nama: 'Roland'};
  },
  render: function() {
    return (
      <h1>Hello, {this.state.nama}!</h1>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <header style={{backgroundColor: '#F00'}}>
        <HelloMessage name={this.props.myName} />
      </header>
    )
  }
});

ReactDOM.render(
  <Header myName="MasROl" />,
  document.getElementById('main')
);
