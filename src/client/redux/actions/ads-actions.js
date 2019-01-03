import { v4 } from 'node-uuid'

export const addAd = (name, sum, date) => ({
  type: 'ADD_AD',
  name,
  sum,
  date,
  id: v4()
});


export const editAd = (name, sum, date, id) => ({
  type: 'EDIT_AD',
  name,
  sum,
  date,
  id
});

export const removeAd = (id) => ({
  type: 'REMOVE_AD',
  id
});
