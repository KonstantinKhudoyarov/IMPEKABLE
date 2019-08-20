import React from 'react';
import './App.scss';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainContent } from '../MainContent/MainContent'
import '../../styles/vars.scss'

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNavItem: 'Calendar'
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar activeItem={this.state.activeNavItem} />
        <MainContent />
      </div>
    );
  }
}
