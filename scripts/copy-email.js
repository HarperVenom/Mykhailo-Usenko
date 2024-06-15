const copyButtons = document.querySelectorAll(".copy-email-button");

Array.from(copyButtons).forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("copied");
    button.innerText = "Copied";
    navigator.clipboard.writeText("harpervenom@gmail.com");
    setTimeout(() => {
      button.classList.remove("copied");
      button.innerText = "Copy Email";
    }, 2000);
  });
});
