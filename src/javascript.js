function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6bct4e17oa2f4e400a14bd864136d360";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a funny peom expert, wanting to put together short poem. Your mission put together a basic 4 line poem, seperate each line. Make sure to follow the user instructions which will be inputted.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener(`submit`, generatePoem);
