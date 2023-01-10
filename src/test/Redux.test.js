import '@testing-library/jest-dom';
import * as actions from '../redux/categories/categories';

describe('Actions', () => {
  it('should create a MARK_SQUARE action', () => {
    const categories = [
      {
        id: 1,
        name: 'ORAL',
        image: './images/cat1.svg',
        count: 0,
      },
    ];

    const expectedAction = {
      type: 'capstone3/categories/GET_CATEGORIES',
      categories,
    };

    expect(actions.getCategoriesAction(categories)).toEqual(expectedAction);
  });
});
