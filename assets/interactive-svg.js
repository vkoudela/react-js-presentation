import React, { Component } from "react";

export default class InteractiveSvg extends Component {
  constructor() {
    super();
    this.state = {
      boja: "yellow",
      radijus: 50
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e) {
    this.setState({
      boja: e.currentTarget.value
    });
  }
  handleChange(e) {
    this.setState({
      radijus: parseInt(e.currentTarget.value)
    });
  }
  render() {
    return (
      <div>
        <div>Odaberi boju:</div>
        <div>
          <label>
            <input type="radio" name="boja" value="yellow" onChange={this.handleClick} checked={this.state.boja == "yellow"}/> Žuta
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="boja" value="red" onChange={this.handleClick} checked={this.state.boja == "red"}/> Crvena
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="boja" value="green" onChange={this.handleClick} checked={this.state.boja == "green"}/> Zelena
          </label>
        </div>
        <label>
          Radijus:
          <div>
            <input type="number" min="20" max="200" value={this.state.radijus} onChange={this.handleChange}/>
          </div>
        </label>
        <div style={{marginTop: "20px"}}>
          <svg width={this.state.radijus * 2} height={this.state.radijus * 2}>
            <circle cx={this.state.radijus} cy={this.state.radijus} r={this.state.radijus - 10} fill={this.state.boja} />
          </svg>
        </div>
      </div>
    );
  }
}
