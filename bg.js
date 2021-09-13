function bgChanger() {
  if (this.scrollY > this.innerHeight / 10) {
    document.body.classList.add("bg-dark");
  } else {
    document.body.classList.remove("bg-dark");
  }
}

window.addEventListener("scroll", bgChanger);
