import config from '../config';
import * as Actions from '../reducer/reducers';

function doPostRequest({ url, data }) {
  return new Promise(resolve => {
    fetch(`http://localhost:8080${url}`, {
      method: "POST",
      body: JSON.stringify({ bodyData: data }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(success => {
        resolve(success);
      })
      .catch(err => {
        console.log({ err });
      });
  });
}

function doGetRequest(url,countryName) {
  return new Promise(resolve => {
    fetch(`${url}${countryName}`)
      .then(res => res.json())
      .then(success => {
        resolve(success);
      })
      .catch(err => {
        console.log({ err });
      });
  });
}

function getDataFromWeatherApi(countryName) {
  debugger;  
  return dispatch => {
    doGetRequest(`${config.baseURL}`,`${countryName}`).then(success => {
      debugger;
      dispatch({
        type: Actions.GET_WEATHER_RES,
        payload: success,
      });
    })
      };
}

function downloadAllCategoriesAct() {
  return dispatch => {
    doGetRequest("/api/categories").then(success => {
      dispatch({ type: StoreActions.setAllCategories, payload: success.data });
    });
  };
}

function saveOrUpdateCategoryAct(category) {
  return dispatch => {
    doPostRequest({ url: "/api/categories", data: category }).then(success => {
      dispatch({
        type: Actions.GET_WEATHER_RES,
        payload: success.data
      });
    });
  };
}

function deleteProvidedCategoryAct(category) {
  return dispatch => {
    doPostRequest({ url: "/api/categories/delete", data: category._id }).then(
      success => {
        dispatch({
          type: StoreActions.deleteProvidedCategory,
          payload: category._id
        });
      }
    );
  };
}

function getAllEnabledCategoriesAct() {
  return dispatch => {
    doGetRequest("/api/categories").then(success => {
      dispatch({
        type: StoreActions.getAllEnabledCategories,
        payload: success.data
      });
    });
  };
}

function unsetAllEnabledCategoriesAct() {
  return { type: StoreActions.unsetAllEnabledCategories, payload: [] };
}

function getQuestionnaireForSelectedCategoryAct(categoryID) {
  return dispatch => {
    doGetRequest(
      `/api/questionnaire/getQuestionForCategory/${categoryID}`
    ).then(success => {
      dispatch({
        type: StoreActions.getQuestionnaireForSelectedCategory,
        payload: success.data
      });
    });
  };
}

function saveOrUpdateQuestionnaireAct(questionObj) {
  return dispatch => {
    doPostRequest({
      url: "/api/questionnaire/setQuestionForCategory",
      data: questionObj
    }).then(success => {
      dispatch({
        type: StoreActions.saveOrUpdateQuestionnaire,
        payload: success.data
      });
    });
  };
}

function deleteSelectedQuestionAct(questionObj) {
  console.log(questionObj);
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: StoreActions.deleteSelectedQuestion,
        payload: questionObj._id
      });
    }, 500);
  };
}

export default {
  getDataFromWeatherApi,
  downloadAllCategoriesAct,
  saveOrUpdateCategoryAct,
  deleteProvidedCategoryAct,
  getAllEnabledCategoriesAct,
  unsetAllEnabledCategoriesAct,
  getQuestionnaireForSelectedCategoryAct,
  saveOrUpdateQuestionnaireAct,
  deleteSelectedQuestionAct
};