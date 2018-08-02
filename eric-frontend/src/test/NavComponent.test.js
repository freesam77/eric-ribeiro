import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from '../components/NavComponent';

it('renders header', () => {
  const span = document.createElement('span');
  ReactDOM.render(<NavComponent />, span);
  ReactDOM.unmountComponentAtNode(span);
});