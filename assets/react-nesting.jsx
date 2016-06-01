var MojaKomponenta = React.createClass({
	render: function () {
		return (
			<form onSubmit={this.othendlajSubmit}>
				<InputPolje type="email" label="Unesi email" ref="email"/>
				<InputPolje type="password" label="Unesi pass" ref="pass"/>
				<button type="submit">Pošalji</button>
			</form>
		);
	},
	othendlajSubmit: function (event) {
		event.preventDefault();
		console.log(
			this.refs.email.refs.inputPolje,
			this.refs.pass.refs.inputPolje
		);
	}
});