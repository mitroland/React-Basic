var React     = require('react');
module.exports = function() {
  return React.createClass({
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
}
