export default (context, inject) => {
  try {
    const globalError = function (error) {
      console.error("Error : ", error);
    };
    inject("globalError", globalError);
  } catch (error) {
    console.log("error from the global error itself >>>", error);
  }
};
