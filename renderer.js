function component() {
  const element = document.createElement("div");

  window.data = "amit";
  element.innerHTML = "Hello";

  return element;
}


document.body.appendChild(component());
