import Notiflix from "notiflix";
import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { jsTbodyEl } from "../refs";
import { addMarkup } from "../utils";

async function init() {
  try {
    const data = await getData("users");
    const markup = makeFirstTableMarkup(data);
    addMarkup(markup, jsTbodyEl);
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

const getUserId = (e) => {
  const el = e.target.closest("tr");
  if (el.nodeName !== "TR") {
    return;
  }
  const userId = el.getAttribute("data-userid");
  location.href = `user.html?user-id=${userId}`;
};

window.addEventListener("load", init);
jsTbodyEl.addEventListener("click", getUserId);
