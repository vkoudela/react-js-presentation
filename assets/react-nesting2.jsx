var MojaKomponenta = React.createClass({
	render: function () {
		return (
			<MojaLista>
				<ListItem id="5"/>
				<ListItem id="6"/>
				<ListItem id="7"/>
			</MojaLista>
		);
	}
});

var MojaLista = React.createClass({
	render: function () {
		return (
			<ul>
				{this.props.children}
			</ul>
		);
	}
});