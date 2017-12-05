//1. Encontrar el elemento en donde se requiere poner un detector de eventos
var clickerButton = document.getElementById('clicker');
var txt = document.getElementById('txt-tweet');
var contentsTweet = document.getElementById('cont-tweet');
var longTxt = txt.value.length;
var txtValue = txt.value;

//2. Definir una función que será llamada cuando suceda el evento, (hacer click)
var onKeyPressE = function() {
  longTxt = txt.value.length;
    //console.log("longitud de texto:", longTxt);
  if(longTxt > 0){
    clickerButton.disabled = false;
    //console.log("habilitado");
  } else {
    clickerButton.disabled = true;
    //console.log("deshabilitado");
  }
}

var onButtonClick = function() {
  txtValue = txt.value;
  var tweet = document.createElement('div');
  tweet.classList.add('block-tweet');
  tweet.innerHTML = txtValue;
  contentsTweet.appendChild(tweet);
  txt.value = '';
}

//3. Llamar a la función definida anteriormente, usando addEventListener
//cuando suceda el evento "click" en el boton.

txt.addEventListener('keypress', onKeyPressE);

clickerButton.addEventListener('click', onButtonClick);
