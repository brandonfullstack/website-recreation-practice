// window.onload = function() {

// }

window.addEventListener("load", function() {
  const removeH1 = document.querySelector("h1");
  removeH1.remove();

  const h1Element = document.createElement("h1");
  h1Element.append("Webpage Recreation Practice");
  const topBody1 = document.querySelector("body");
  topBody1.append(h1Element);

  const pElement = document.createElement("p");
  pElement.append("The HTML of this webpage was created with JavaScript.");
  const topBody2 = document.querySelector("body");
  topBody2.append(pElement);
});