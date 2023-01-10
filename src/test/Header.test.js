import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Testing Header component', () => {
  test('Snapshot testing', () => {
    const myRenderer = renderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
        ,
      </Provider>,
    );
    const testComponent = myRenderer.toJSON();
    expect(testComponent).toMatchSnapshot();
  });
});
