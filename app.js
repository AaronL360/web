function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let x = document.querySelector("#coupon");
  console.log(x.value);
  x.value = "";
});
