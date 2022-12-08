import axios from "axios";
import * as types from "../constants/statusConstants";

const URL_BASIC = process.env.REACT_APP_URL;

export const fetchGeneralStats = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_GENERALSTATUS_REQUEST });

    const { data } = await axios({
      method: "post",
      url: `${URL_BASIC}/test-db`,
      headers: {
        "test-user": "mohamed"
      },
      data: {
        action: 0,
        paging: {
          page: 0,
          limit: 10,
        }
      },
    });

    dispatch({
      type: types.GET_GENERALSTATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_GENERALSTATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const fetchTopProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_GENERALSTATUS_REQUEST});

    const { data } = await axios({
      method: "post",
      url: `${URL_BASIC}/test-db`,
      headers: {
        "test-user": "mohamed"
      },
      data: {
        action: 1,
        paging: {
          page: 0,
          limit: 10,
        }
      },
    })

    dispatch({
      type: types.GET_TOPPROFILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_GENERALSTATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const fetchTopActivities = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_GENERALSTATUS_REQUEST});

    const { data } = await axios({
      method: "post",
      url: `${URL_BASIC}/test-db`,
      headers: {
        "test-user": "mohamed"
      },
      data: {
        action: 3,
        paging: {
          page: 0,
          limit: 30,
        }
      },
    })

    dispatch({
      type: types.GET_TOPACTIVITIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_GENERALSTATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const fetchProfileStats = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_GENERALSTATUS_REQUEST});

    const { data } = await axios({
      method: "post",
      url: `${URL_BASIC}/test-db`,
      headers: {
        "test-user": "mohamed"
      },
      data: {
        action: 2,
      },
    })

    dispatch({
      type: types.GET_PROFILESTATS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_GENERALSTATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const fetchTrackingChart = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_GENERALSTATUS_REQUEST});

    const { data } = await axios({
      method: "post",
      url: `${URL_BASIC}/test-db`,
      headers: {
        "test-user": "mohamed"
      },
      data: {
        action: 4,
      },
    })

    console.log(data);
    dispatch({
      type: types.GET_TRAKINGCHART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_GENERALSTATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const fetchChiffre = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_GENERALSTATUS_REQUEST});

    const config = {
      headers: {
        "test-user": "mohamed"
      }
    }

    const { data } = await axios.post(`${URL_BASIC}/test-db`, {
      action: 5,
    }, config);


    dispatch({
      type: types.GET_CHIFFRE_SUCCESS,
      payload: data,
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: types.GET_GENERALSTATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}