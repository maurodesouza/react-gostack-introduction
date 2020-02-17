import React, { Component } from 'react';
import TechItem from './TechItem';

class ListTech extends Component {
  state = {
    newTech: '',
    techs: [
      'Nodejs',
      'Reactjs',
      'React Native',
    ],
  }

  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
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

  handleDelete = (index) => {
    this.setState({ techs: this.state.techs.filter((t, i) => i !== index) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech, index) => (
            <TechItem 
              key={index}
              tech={tech}
              onDelete={() => this.handleDelete(index)}
            />
          ))}
        </ul>
        <div>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
            placeholder="Adicionar tecnologia"
          />
          <button type="submit"> Enviar </button>
        </div>
      </form>
    )
  }
}

export default ListTech;
