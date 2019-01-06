import { v4 } from 'node-uuid';

export const ADS_TYPES = {
  ADD_AD: 'ADD_AD',
  EDIT_AD: 'EDIT_AD',
  REMOVE_AD: 'REMOVE_AD'
};

export const addAd = adInfo => ({
  type: ADS_TYPES.ADD_AD,
  payload: {
    ...adInfo, id: v4()
  }
});


export const editAd = editInfo => ({
  type: ADS_TYPES.EDIT_AD,
  payload: {
    editInfo
  }
});

export const removeAd = id => ({
  type: 'REMOVE_AD',
  payload: {
   id
  }
});
