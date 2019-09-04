/* eslint-disable */
import _mergeWith from 'lodash/mergeWith';

export const merge = (object, source) => (
  _mergeWith({}, object, source, (objValue, srcValue) => {
    if (Array.isArray(objValue)) return srcValue;
  })
);

export const mergeItem = (state, data) => {
  const item = { [data.id]: data };

  return merge(state, item);
};

export const mergeItems = (state, data) => {
  const items = data.reduce((result, item) => {
    result[item.id] = item;

    return result;
  }, {});

  return merge(state, items);
};

export const mergeByIndex = (array, object) => (
  array.map((item, i) => {
    if (object[i]) return { ...item, ...object[i] };

    return item;
  })
);
