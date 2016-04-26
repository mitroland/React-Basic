var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = React.createClass({
  getInitialState: function() {
    return {todos: [
      {name:"nganu"},
      {name:"nunga"},
      {name:"yelaah"}
    ]};
  },
  componentDidMount: function()
  {
    fetch('todos.json').then(function(response){
      return response.json();
    }).then(function(j){
      this.setState({todos: j});
    }.bind(this));
  },
  render: function() {
    var todoNodes = this.state.todos.map(function(task, i){
      return (<li key={i}>{task.name}</li>);
    });
    return (<ul>{todoNodes}</ul>);
  }
});

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
      <h1>Hello <a href="#" onClick={this.props.onClick}>{this.state.nama}</a></h1>
    );
  }
});

var Header = React.createClass({
  getInitialState: function() {
    return {bc: 'green'};
  },
  onClick: function(e) {
    this.setState({bc: this.state.bc == 'red' ? 'green' : 'red'});
    e.preventDefault();
  },
  render: function() {
    return (
      <header style={{backgroundColor: this.state.bc}}>
        <HelloMessage onClick={this.onClick}/>
      </header>
    )
  }
});

ReactDOM.render(
  <TodoList />,
  document.getElementById('main')
);
