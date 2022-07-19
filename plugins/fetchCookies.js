// generating token for the api call and fetching CMS data for the home page

export default async ({ req, redirect, store, $globalError }) => {
  try {
    if (process.browser) return;
    if (!req.headers.cookie) {
      redirect("/login");
      return;
    }
    const getCookieValue = (name) =>
      req.headers.cookie
        .match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")
        ?.pop() || "";

    let cookies = getCookieValue("cdpAuthToken");
    if (cookies == undefined || cookies == "undefined") {
      redirect("/login");
    } else {
      store.commit("UPDATE_USER_DETAILS", {
        payload: {
          cdpAuthToken: cookies,
        },
      });
    }
  } catch (error) {
    $globalError(`there is an error from fetchCookies plugin >>> ${error}`);
  }
};
