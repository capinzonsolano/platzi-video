import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';




const homeContainer = document.getElementById('home-container')
// ReactDOM.render(qué voy a renderizar, dónde lo haré);
render(<Home data={data}/>,homeContainer);
