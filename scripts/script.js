document.querySelectorAll(".heading").forEach((heading) => {
  const iconPlus = document.createElement("img");
  iconPlus.src = "./assets/images/icon-plus.svg";
  iconPlus.alt = "plus icon";

  const iconMinus = document.createElement("img");
  iconMinus.src = "./assets/images/icon-minus.svg";
  iconMinus.alt = "plus icon";

  const details = heading.parentNode;

  if (details.open) {
    heading.appendChild(iconMinus);
  } else {
    heading.appendChild(iconPlus);
  }

  details.addEventListener("toggle", () => {
    if (details.open) {
        if (heading.contains(iconPlus)) heading.removeChild(iconPlus);
        heading.appendChild(iconMinus);
    } else {
        if (heading.contains(iconMinus)) heading.removeChild(iconMinus);
        heading.appendChild(iconPlus);
    }

    details.setAttribute("aria-expanded", details.open);
  });
});
