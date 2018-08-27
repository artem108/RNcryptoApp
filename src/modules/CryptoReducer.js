import axios from 'axios'
import BaseUrl from '../api'

const GET_COIN_DATA = 'GET_COIN_DATA'
const GET_COIN_DATA_OK = 'GET_COIN_DATA_OK'
const GET_COIN_DATA_ERR = 'GET_COIN_DATA_ERR'

const initialState = {
  isFetching: null,
  data: [],
  hasErr: false,
  errMessage: null
}

export const fetchCoinData = () => {

    return dispatch => {
      dispatch({type: GET_COIN_DATA})

        return axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
                  .then(res =>{
                    dispatch({type: GET_COIN_DATA_OK, payload: res.data})
                  })
                  .catch(err => dispatch({type: GET_COIN_DATA_ERR, payload: err}))
            }
          }

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        hasErr: false,
        errMessage: null
      });
    case GET_COIN_DATA_OK:
    return Object.assign({}, state, {
      isFetching: false,
      data: action.payload,
      hasErr: false,
      errMessage: null
    });
    case GET_COIN_DATA_ERR:
      return {
        isFetching: false,
        data: [],
        hasErr: true,
        errMessage: action.payload,
      }
    default:
      return state
  }
}
