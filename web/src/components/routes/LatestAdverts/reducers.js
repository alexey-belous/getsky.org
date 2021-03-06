import { GET_ADVERTS_REQUEST, GET_ADVERTS_RESPONSE } from './actions';

export const initialState = {
    loading: true,
    buyAdverts: [],
    sellAdverts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVERTS_REQUEST:
            return initialState;
        case GET_ADVERTS_RESPONSE:
            return {
                ...state,
                ...action.allAdverts,
                loading: false,
            };
        default:
            return state;
    }
};
