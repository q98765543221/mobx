import React, { Component } from 'react';
import './App.css';

import * as c2 from './Chapter06';
import * as my from './my';
import { FormValidationExample} from './my/form';

class App extends Component {
  render() {
    return (
      // <c2.PageRoutingExample></c2.PageRoutingExample>
      <FormValidationExample></FormValidationExample>
    );
  }
}

export default App;
