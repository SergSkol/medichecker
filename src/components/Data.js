import axios from 'axios';
import { getCategoriesAction } from '../redux/categories/categories';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
import cat5 from './images/cat5.png';
import cat6 from './images/cat6.png';

const standardCategories = [
  {
    name: 'ORAL',
    image: cat1,
    count: 0,
  },
  {
    name: 'TOPICAL',
    image: cat2,
    count: 0,
  },
  {
    name: 'INTRAVENOUS',
    image: cat3,
    count: 0,
  },
  {
    name: 'INTRAMUSCULAR',
    image: cat4,
    count: 0,
  },
  {
    name: 'OPHTHALMIC',
    image: cat5,
    count: 0,
  },
];

const getCategories = () => async (dispatch) => {
  const transformData = (data) => {
    const newData = [];

    standardCategories.forEach((item) => {
      const dataFound = data.filter(((e) => e.term === item.name));
      const { count } = dataFound[0];
      const newItem = { ...item, count };
      newData.push(newItem);
    });
    return newData;
  };

  const getDataFrom = () => {
    const now = new Date();
    now.setDate(now.getDate() - 7);

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const newDate = year * 10000 + month * 100 + day;

    return newDate;
  };

  const getDataTo = () => {
    const now = new Date();
    now.setDate(now.getDate() + 365);

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const newDate = year * 10000 + month * 100 + day;

    return newDate;
  };

  let url = process.env.REACT_APP_COUNT_ROUTE;
  const dateFrom = getDataFrom();
  const dateTo = getDataTo();
  url += `&search=effective_time:[${dateFrom}+TO+${dateTo}]`;

  const sendRequest = async () => {
    await axios.get(`${url}`)
      .then((response) => {
        const { data } = response;
        const categories = transformData(data.results);
        dispatch(getCategoriesAction(categories));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

export { getCategories };
