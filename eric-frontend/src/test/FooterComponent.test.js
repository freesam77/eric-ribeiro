import React from 'react';
import ReactDOM from 'react-dom';
import FooterComponent from '../components/FooterComponent';

it('renders an unordered list', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<FooterComponent />, ul);
  ReactDOM.unmountComponentAtNode(ul);
});