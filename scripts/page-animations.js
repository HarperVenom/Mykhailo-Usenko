window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const currentScroll = window.scrollY;
  const windowHeight = window.innerHeight;
  //   console.log(currentScroll);

  sections.forEach((section) => {
    const sectionY = section.offsetTop;
    // console.log(sectionY);
    if (currentScroll + windowHeight > sectionY) {
      if (section.classList.contains("projects")) {
        // console.log(section);
      }
    }
  });
});
