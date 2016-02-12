'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import LexiconCustomizer from '../js/components/LexiconCustomizer'
import lexiconCustomizerReducer from '../js/reducers/index'

import hydrateState from '../../../lib/hydrate_state';

const initalState = hydrateState();

const store = createStore(
	lexiconCustomizerReducer,
	initalState,
	applyMiddleware(thunk)
);

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<LexiconCustomizer />
		</Provider>,
		document.getElementById('main')
	);
};

render();
