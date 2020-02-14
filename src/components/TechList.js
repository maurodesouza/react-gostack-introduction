import React, { Component } from 'react';

class ListTech extends Component {
  state = {
    newTech: '',
    techs: [
      'Nodejs',
      'Reactjs',
      'React Native',
    ],
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ newTech: value })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [... this.state.techs, this.state.newTech],
      newTech: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>
        <button type="submit"> Enviar </button>
      </form>
    )
  }
}

export default ListTech;
