import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Faq from './components/Faq';
import data from './constants/data';

ReactDOM.render(
  <Faq data={data} />,
  document.getElementById('app')
);
