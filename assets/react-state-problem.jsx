var MojaKomponenta = React.createClass({
	getInitialState: function () {
		return {
			lista: [
				{grad: "Varaždin"},
				{grad: "Zagreb"},
				{grad: "Split"}
			]
		};
	},
	render: function () {
		return (
			<ul onClick={this.update}>
				{this.state.lista.map(function (el, index) {
					return <li key={index}>{el.grad}</li>;
				})}
			</ul>
		);
	},
	update: function () {
		var lista = this.state.lista;
		lista[1].grad = "Dubrovnik";
		this.setState({ lista: lista });
	}
});