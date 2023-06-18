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

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgElement.setAttribute("style", "width:50%");
  const topBody3 = document.querySelector("body");
  topBody3.append(imgElement);
});