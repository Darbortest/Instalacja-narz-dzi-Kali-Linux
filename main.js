const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document.querySelectorAll("button[data-copy-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-copy-target");
    const textToCopy = document.getElementById(targetId).innerText;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    const icon = button.querySelector("i");
    icon.classList.remove("fa-regular", "fa-clone");
    icon.classList.add("fa-solid", "fa-check");

    setTimeout(() => {
      icon.classList.remove("fa-solid", "fa-check");
      icon.classList.add("fa-regular", "fa-clone");
    }, 2000);
  });
});
