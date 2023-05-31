export function addMarkup(markup, elem) {
  elem.innerHTML = markup;
}

export function goBack() {
  history.back();
}

export function goForward() {
  console.log("2");
  history.forward();
}
