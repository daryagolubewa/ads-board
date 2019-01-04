import { v4 } from 'node-uuid';

export const addAd = (name, text, phone, city, image) => ({
  type: 'ADD_AD',
  name,
  text,
  phone,
  city,
  image,
  id: v4()
});


export const editAd = (name, text, phone, city, image, id) => ({
  type: 'EDIT_AD',
  name,
  text,
  phone,
  city,
  image,
  id
});

export const removeAd = id => ({
  type: 'REMOVE_AD',
  id
});
