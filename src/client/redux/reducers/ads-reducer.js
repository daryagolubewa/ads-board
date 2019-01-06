import { ADS_TYPES } from '../actions/ads-actions';

export default function adReducer(state = [], { type, payload }) {
  switch (type) {
    case ADS_TYPES.ADD_AD: {
      return [
        {
          name: payload.name,
          text:
          payload.text,
          phone:
          payload.phone,
          city:
          payload.city,
          id:
          payload.id
        },
        ...state
      ];
    }
    case ADS_TYPES.EDIT_AD: {
      return state.map(
        ad => (ad.id === payload.editInfo.id ? {
          name: payload.editInfo.name,
          text: payload.editInfo.text,
          phone: payload.editInfo.phone,
          city: payload.editInfo.city,
          id: payload.editInfo.id
        }
          : ad)
      );
    }
    case ADS_TYPES.REMOVE_AD: {
      return state.filter(ad => (ad.id !== payload.id));
    }
  }
  return state;
}
