var MojaKomponenta = React.createClass({
	render: function () {
		return (
			<form onSubmit={this.othendlajSubmit}>
				<label>
					<span>Unesi e-mail adresu:</span>
					<input type="email" ref="inputPolje"/>
				</label>
				<button type="submit">Pošalji</button>
			</form>
		);
	},
	othendlajSubmit: function (e) {
		e.preventDefault();
		console.log(this.refs.inputPolje.value);
	}
});