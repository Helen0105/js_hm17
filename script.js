// first
const buttonRef = document.querySelector(".button");
console.log(buttonRef);

const inputRef = document.querySelector("[type='text']");
console.log(inputRef);
inputRef.value = "happy new year";

// second
const imageRef = document.querySelector(".image");
console.log(imageRef);
imageRef.src =
  "https://img.freepik.com/free-photo/three-wise-men-christmas-celebration_23-2151909008.jpg?semt=ais_hybrid";

// third
const linkRef = document.querySelector("a");
linkRef.href = "https://instagram-my.ru/help/instagram-login-my-page/";
console.log(linkRef);

const imageEl = document.querySelector(".image2");
imageEl.alt = "cristmas tree";
console.log(imageEl);

// fourth

const listRef = document.querySelector(".list");
listRef.firstElementChild.textContent = "neeew text for h1";
