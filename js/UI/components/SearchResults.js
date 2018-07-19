var React = require('react');
var SearchResult = require('./SearchResult');
var SearchResults = React.createClass({
	render: function(){
		return(
				<div className="table-responsive">
					<table className="table table-striped">
						<tbody>
							<tr>
								<td className="col-sm-1">#</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						{this.props.results.map(function(result, index){
								return <SearchResult result={result} key={index} index={index + 1}/>
						})}
						</tbody>
					</table>
				</div>
		)
	}
});
module.exports = SearchResults;