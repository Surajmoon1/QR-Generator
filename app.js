const text = document.getElementById("text");
const size = document.querySelector("#size");
let img = document.querySelector("#img");
const btn = document.querySelector("#submit");

let gapi =
  "https://chart.googleapis.com/chart?chf=bg,s,FFFFFF00&amp&cht=qr&chs=";



const genQr = () => {
  if (text.value !== "" && size.value == "400") {
    img.src = `${gapi}400x400&chl=${text.value}`;
  } else if (text.value !== "" && size.value == "200") {
    img.src = `${gapi}200x200&chl=${text.value}`;
  } else if (text.value !== "" && size.value == "300") {
    img.src = `${gapi}300x300&chl=${text.value}`;
  } else {
    alert("please enter text");
  }

  text.value = "";
};


btn.addEventListener("click", () => {
  img.classList.toggle('display')
  genQr();
});
