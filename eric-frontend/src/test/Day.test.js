import React from 'react';
import ReactDOM from 'react-dom';
import Day from '../components/Day';

it('renders a table', () => {
  const table = document.createElement('table');
  ReactDOM.render(<Day />, table);
  ReactDOM.unmountComponentAtNode(table);
});