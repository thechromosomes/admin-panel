// global config file
import { _api, _baseUrl } from "../config/api";

// store state
export const state = () => ({
  BASE_URL: _baseUrl,
  mainLoader: false,
  cdpAuthToken: null,
});
// store mutations
export const mutations = {
  UPDATE_PAGE_LOADER(state, { display }) {
    state.mainLoader = display;
  },

  UPDATE_USER_DETAILS(state, { payload }) {
    state.cdpAuthToken = payload.cdpAuthToken || null;
  },
};
// store actions
export const actions = {
  apiCall(context, data) {
    context.commit("UPDATE_PAGE_LOADER", { display: true });
    let request = data.params;
    var authOptions = {
      method: data.method,
      url: data.url,
      headers: { Authorization: "Bearer " + context.state.cdpAuthToken },
      params: request || null,
    };

    return new Promise((resolve, reject) => {
      this.$axios(authOptions)
        .then((response) => {
          context.commit("UPDATE_PAGE_LOADER", { display: false });
          resolve(response.data);
        })
        .catch((error) => {
          context.commit("UPDATE_PAGE_LOADER", { display: false });
          this.$globalError(error);
          reject(error);
        });
    });
  },
};
