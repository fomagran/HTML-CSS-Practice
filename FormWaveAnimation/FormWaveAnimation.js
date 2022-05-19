const labels = document.querySelectorAll(".form-control label");

screen.orientation.lock("landscape").then(function () {
  alert("Landscape");
});

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
