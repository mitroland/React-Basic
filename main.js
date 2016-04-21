var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {nama: 'Roland'};
  },
  componentDidMount: function()
  {
    var $this = this,
        timeoutID;

    timeoutID = setTimeout(function(){
      $this.setState({nama: 'Arief Humala'});
      clearTimeout(timeoutID);
    }, 3000);
  },
  onClick: function(e) {
    alert('Hallo '+this.state.nama);
    e.preventDefault();
  },
  render: function() {
    return (
      <h1>Hello <a href="#" onClick={this.onClick}>{this.state.nama}</a></h1>
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
