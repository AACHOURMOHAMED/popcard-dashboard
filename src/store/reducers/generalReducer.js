import * as types from "../constants/statusConstants";

const generalReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_GENERALSTATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_GENERALSTATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        generalStatus: action.payload,
      };
    case types.GET_TOPPROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        topProfiles: action.payload,
      };
    case types.GET_TOPACTIVITIES_SUCCESS:
        return {
            ...state,
            loading: false,
            topActivities: action.payload,
        }
    case types.GET_PROFILESTATS_SUCCESS:
        return {
            ...state,
            loading: false,
            profileStats: action.payload,
        }
    case types.GET_TRAKINGCHART_SUCCESS:
        return {
            ...state,
            loading: false,
            trackingChart: action.payload,
        }
    case types.GET_CHIFFRE_SUCCESS:
        return {
            ...state,
            loading: false,
            chiffre: action.payload,
        }
    case types.GET_GENERALSTATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
