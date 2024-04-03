// const text = document.getElementById("text");
const size = document.querySelector("#size");
let img = document.querySelector("#img");
const btn = document.querySelector("#submit");

let api = "https://api.qrserver.com/v1/create-qr-code/?";

const genQr = (text) => {
  if (text.value !== "" && size.value == "400") {
    img.src = `${api}data=${text.value}&amp;size=400x400`;
  } else if (text.value !== "" && size.value == "200") {
    img.src = `${api}data=${text.value}&amp;size=200x200`;
  } else if (text.value !== "" && size.value == "300") {
    img.src = `${api}data=${text.value}&amp;size=300x300`;
  } else {
    alert("please enter text");
  }

  text.value = "";
  img.classList.add("display");
};



btn.addEventListener("click", () => {
  const text = document.getElementById("text");
  genQr(text);
});
