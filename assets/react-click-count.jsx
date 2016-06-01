var MojaKomponenta = React.createClass({
	getInitialState: function () {
		return {
			brojac: 0
		};
	},
	render: function () {
		if (this.state.brojac >= 5) {
			return <div>Alo! Uspori!</div>;
		}
		return (
			<div>
				<strong>
					Tipka je pritisnuta {this.state.brojac}
					put{this.state.brojac != 1 ? "a" : ""}
				</strong>
				<button type="button" onClick={this.othendlajKlik}>
					Klikni me
				</button>
			</div>
		);
	},
	othendlajKlik: function () {
		this.setState({ brojac: this.state.brojac + 1 });
	}
});