export const GET_WEATHER_RES = 'weather-app/repos/LOAD_DATA';
export const NET_ERROR = 'weather-app/repos/NET_ERROR';
export const GET_REPOS_FAIL = 'weather-app/repos/LOAD_FAIL';
const initialState = {
    dataStore:[],
    netError:false,
}
export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_RES:
    debugger;
      return { ...state, netError:false , dataStore:action.payload };
    case NET_ERROR:
    debugger;  
    return { ...state, netError:action.payload };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

