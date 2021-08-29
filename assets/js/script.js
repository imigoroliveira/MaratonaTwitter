const textarea = document.querySelector("textarea");
const tweetar = document.querySelector("button");

function pegarTweet(event) {
  event.preventDefault();

  const tweetTextarea = textarea.value;
  criarTweet(tweetTextarea);
}

tweetar.addEventListener("click", pegarTweet);

function criarTweet() {
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  const tweet = {
    nome: "Igor",
    foto: "./scr/img/ProfilePic.png",
    usuario: "imigoroliveira",
    texto: tweetTexto,
    tempo: `${hora}:${minutos}`,
  };
  listarTemplateTweet(tweet);
}
function listarTemplateTweet(tweet) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let span = document.createElement("span");
  let p = document.createElement("p");

  li.appendChild(img);
  console.log(li);
}
