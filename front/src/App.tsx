import * as React from 'react';

import Header from './components/Header/Header'

import PageInterface from './PageInterface';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (<div>
      <h1>Welcome to React with Typescript</h1>
      <p>The color of this page is: {this.props.color}</p>
      <Header name='Initial'/>
    </div>
    );
  }
}

export default App;