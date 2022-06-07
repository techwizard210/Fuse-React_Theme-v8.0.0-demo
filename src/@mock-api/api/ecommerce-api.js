import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

let productsDB = mockApi.components.examples.ecommerce_products.value;
let ordersDB = mockApi.components.examples.ecommerce_orders.value;

mock.onGet('/api/ecommerce/products').reply((config) => {
  return [200, productsDB];
});

mock.onPost('/api/ecommerce/products').reply(({ data }) => {
  const newProduct = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };

  productsDB.push(newProduct);

  return [200, newProduct];
});

mock.onDelete('/api/ecommerce/products').reply(({ data }) => {
  const ids = JSON.parse(data);
  productsDB = productsDB.filter((item) => ids.includes(item.id));

  return [200, productsDB];
});

mock.onGet(/\/api\/ecommerce\/products\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/ecommerce\/products\/(?<id>[^/]+)/).groups;

  return [200, _.find(productsDB, { id })];
});

mock.onPut(/\/api\/ecommerce\/products\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/ecommerce\/products\/(?<id>[^/]+)/).groups;

  _.assign(_.find(productsDB, { id }), JSON.parse(data));

  return [200, _.find(productsDB, { id })];
});

mock.onDelete(/\/api\/ecommerce\/products\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/ecommerce\/products\/(?<id>[^/]+)/).groups;

  _.remove(productsDB, { id });

  return [200, id];
});

mock.onGet('/api/ecommerce/orders').reply((config) => {
  return [200, ordersDB];
});

mock.onPost('/api/ecommerce/orders').reply(({ data }) => {
  const newOrder = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };

  ordersDB.push(newOrder);

  return [200, newOrder];
});

mock.onDelete('/api/ecommerce/orders').reply(({ data }) => {
  const ids = JSON.parse(data);
  ordersDB = ordersDB.filter((item) => ids.includes(item.id));

  return [200, ordersDB];
});

mock.onGet(/\/api\/ecommerce\/orders\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/ecommerce\/orders\/(?<id>[^/]+)/).groups;

  return [200, _.find(ordersDB, { id })];
});

mock.onPut(/\/api\/ecommerce\/orders\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/ecommerce\/orders\/(?<id>[^/]+)/).groups;

  _.assign(_.find(ordersDB, { id }), JSON.parse(data));

  return [200, _.find(ordersDB, { id })];
});

mock.onDelete(/\/api\/ecommerce\/orders\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/ecommerce\/orders\/(?<id>[^/]+)/).groups;

  _.remove(ordersDB, { id });

  return [200, id];
});
