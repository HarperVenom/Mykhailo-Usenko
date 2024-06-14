function showAbout(event) {
  const button = event.target;
  const parent = button.parentElement;

  const aboutBlock = parent.querySelector(".about");
  const sectionHeight = calculateMaxHeight(aboutBlock);

  if (parent.classList.contains("hidden")) {
    aboutBlock.style.maxHeight = sectionHeight + "px";
    parent.classList.remove("hidden");
    button.innerText = "Hide";
  } else {
    aboutBlock.style.maxHeight = "0";
    parent.classList.add("hidden");
    button.innerText = "More about the project";
  }
}

window.addEventListener("resize", () => {
  const aboutBlocks = document.querySelectorAll(".project-container .about");
  Array.from(aboutBlocks).forEach((block) => {
    if (block.parentElement.classList.contains("hidden")) return;
    const newHeight = calculateMaxHeight(block);
    block.style.maxHeight = newHeight + "px";
  });
});

function calculateMaxHeight(aboutBlock) {
  const blockChildren = Array.from(aboutBlock.children);
  let sectionHeight = 0;
  blockChildren.forEach((child) => {
    const style = window.getComputedStyle(child);
    const marginTop = parseFloat(style.marginTop);
    const marginBottom = parseFloat(style.marginBottom);

    sectionHeight +=
      child.getBoundingClientRect().height + marginBottom + marginTop;
  });
  return sectionHeight;
}
