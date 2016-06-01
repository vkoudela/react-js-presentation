var MojaKomponenta = React.createClass({
	render: function () {
		return (
			<div className="layout">
				<strong>Prosljeđena varijabla je: {this.props.ime}</strong>
				<DrugaKomponenta ime={this.props.ime} grad="Varaždin"/>
			</div>
		);
	}
});

ReactDOM.render(<MojaKomponenta ime="MeetUp"/>, document.body);