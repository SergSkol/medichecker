import axios from 'axios';
import { getCategoriesAction } from '../redux/categories/categories';
import { getDetailsAction } from '../redux/details/details';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
import cat5 from './images/cat5.png';
import cat6 from './images/cat6.png';

const standardCategories = [
  {
    id: 1,
    name: 'ORAL',
    image: cat1,
    count: 0,
  },
  {
    id: 2,
    name: 'TOPICAL',
    image: cat2,
    count: 0,
  },
  {
    id: 3,
    name: 'INTRAVENOUS',
    image: cat3,
    count: 0,
  },
  {
    id: 4,
    name: 'INTRAMUSCULAR',
    image: cat4,
    count: 0,
  },
  {
    id: 5,
    name: 'OPHTHALMIC',
    image: cat5,
    count: 0,
  },
  {
    id: 6,
    name: 'DENTAL',
    image: cat6,
    count: 0,
  },
];

const getDateFrom = () => {
  const now = new Date();
  now.setDate(now.getDate() - 7);

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const newDate = year * 10000 + month * 100 + day;

  return newDate;
};

const getDateTo = () => {
  const now = new Date();
  now.setDate(now.getDate() + 365);

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const newDate = year * 10000 + month * 100 + day;

  return newDate;
};

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

  let url = process.env.REACT_APP_COUNT_ROUTE;
  const dateFrom = getDateFrom();
  const dateTo = getDateTo();
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

const getDetails = (category) => async (dispatch) => {
  const transformData = (data) => {
    const newData = [];

    data.forEach((item) => {
      const newItem = {
        id: item.set_id,
        name: item.spl_product_data_elements,
        AI: item.active_ingredient,
        purpose: item.purpose,
        indications: item.indications_and_usage,

      };
      newData.push(newItem);
    });
    return newData;
  };

  let url = process.env.REACT_APP_BASE_URL;
  const dateFrom = getDateFrom();
  const dateTo = getDateTo();
  url += `&search=effective_time:[${dateFrom}+TO+${dateTo}]`;
  url += `+AND+openfda.route:${category}`;
  url += '&limit=100';

  const sendRequest = async () => {
    await axios.get(`${url}`)
      .then((response) => {
        const { data } = response;
        const details = transformData(data.results);
        dispatch(getDetailsAction(category, details));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

export { getCategories, getDetails };
