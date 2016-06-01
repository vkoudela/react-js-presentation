var MojaKomponenta = React.createClass({
	render: function () {
		return (
			<div>
				Ovaj tekst je u React komponenti.
			</div>
		);
	}
});

var instanca = ReactDOM.render(<MojaKomponenta/>, document.body);