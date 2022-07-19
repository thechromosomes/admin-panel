import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", (num, type) => {
  if (num) {
    if (type === "withTime") {
      return moment(num).format("lll");
    } else {
      return moment(num).format("MMM Do YYYY");
    }
  }
});

Vue.filter("formatText", (string, type) => {
  let finalString;
  if (string) {
    if (type === "toUpperCase") {
      finalString = string.replaceAll("_", " ").toUpperCase();
    } else {
      finalString = string.replaceAll("_", " ");
    }
    return finalString;
  }
});
