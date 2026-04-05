function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem Hereeeeee",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemForElement = document.querySelector("#poem-generator-form");
poemForElement.addEventListener(`submit`, generatePoem);
