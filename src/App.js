import React, { Component } from 'react';
import './App.css';

import * as c2 from './Chapter09';
import * as my from './my';
import { FormValidationExample} from './my/form';
import { MyProvider } from './my/provider';

class App extends Component {
  render() {
    return (
      // <c2.PageRoutingExample></c2.PageRoutingExample>
      // <c2.AtomExample></c2.AtomExample>
      <MyProvider></MyProvider>
    );
  }
}

export default App;
