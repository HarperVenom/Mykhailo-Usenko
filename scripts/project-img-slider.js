const imgsContainer = document.querySelectorAll(".imgs");

imgsContainer.forEach((container) => {
  const imgs = Array.from(container.children).filter((element) =>
    element.classList.contains("img")
  );

  const navigator = document.createElement("div");
  navigator.classList.add("img-navigator");
  const slabWidth = (0.6 / imgs.length) * 100;
  const slabsArray = [];

  let currentIndex = 0;
  let interval = null;

  for (let i = 0; i < imgs.length; i++) {
    const imgSlab = document.createElement("div");
    imgSlab.classList.add("img-slab");
    const lighting = document.createElement("div");
    lighting.classList.add("lighting");
    imgSlab.appendChild(lighting);
    imgSlab.style.width = slabWidth + "%";
    navigator.appendChild(imgSlab);
    slabsArray.push(imgSlab);

    imgSlab.addEventListener("mouseover", () => {
      changeImage(i);
      currentIndex = i;
      clearInterval(interval);
    });

    imgSlab.addEventListener("mouseleave", () => {
      interval = setInterval(autoChange, 3000);
    });
  }

  container.appendChild(navigator);

  changeImage(currentIndex);
  interval = setInterval(autoChange, 3000);

  function autoChange() {
    if (currentIndex === imgs.length - 1) currentIndex = 0;
    else currentIndex++;

    changeImage(currentIndex);
  }

  function resetSlabs() {
    slabsArray.forEach((slab) => {
      slab.classList.remove("active");
    });
  }

  function resetImages() {
    imgs.forEach((img) => {
      img.classList.remove("active");
    });
  }

  function changeImage(index) {
    resetSlabs();
    resetImages();
    slabsArray[index].classList.add("active");
    imgs[index].classList.add("active");
  }
});
