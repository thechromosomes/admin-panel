import { _api, _baseUrl } from "../config/api";

export default (context, inject) => {
  inject("_api", _api);
};
