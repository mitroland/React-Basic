var React = require('react');
var ReactDOM = require('react-dom');

var AddTodo       = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  onBtnClick: function(e) {
    this.props.addTodoStr(this.state.text);
    this.setState({text: ''});
    e.preventDefault();
  },
  componentDidMount: function()
  {

  },
  render: function() {
    return (
      <div>
        <input onChange={this.onChange} type="text" value={this.state.text} />
        <button onClick={this.onBtnClick} type="submit">Kirim</button>
      </div>
    );
  }
});

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
  addTodoStr: function(s) {
    var td = this.state.todos;
    td.push({name:s});
    this.setState({todos: td});
  },
  render: function() {
    var todoNodes = this.state.todos.map(function(task, i){
      return (<li key={i}>{task.name}</li>);
    });
    return (
      <div>
        <ul>{todoNodes}</ul>
        <AddTodo addTodoStr={this.addTodoStr} />
      </div>
    );
  }
});

ReactDOM.render(
  <TodoList />,
  document.getElementById('main')
);
