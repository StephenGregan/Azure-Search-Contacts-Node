var React = require('react');
var SearchResult = React.createClass({
	render: function(){
		return(
				<tr>
					<td className="col-sm-1">{this.props.index}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			)
	}
});
module.exports = SearchResult;