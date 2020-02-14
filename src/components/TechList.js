import React, { Component } from 'react';

class ListTech extends Component {
  state = {
    techs: [
      'Nodejs',
      'Reactjs',
      'React Native',
    ],
  }

  render() {
    console.log(this.state);

    return (
      <ul>
        <li>Nodejs</li>
        <li>Reactjs</li>
        <li>React Native</li>
      </ul>
    )
  }
}

export default ListTech;
