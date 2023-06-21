const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.background = e.target.id;
    }
  });
});
