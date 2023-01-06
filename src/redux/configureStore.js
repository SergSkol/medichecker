import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import detailsReducer from './details/details';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    details: detailsReducer,
  },
});

export default store;
