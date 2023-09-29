import analyzer from './analyzer.js';

// Capturar el textarea y el párrafo donde mostrar el resultado
const textarea = document.querySelector('textarea[name="user-input"]');
//querySelector: Se usa cuando se necesita seleccionar un elemento basado en una clase, un ID o cualquier otro selector CSS.
//getElementById: Se utiliza cuando se sabe que el elemento que se desea seleccionar tiene un ID único.
const resetbutton = document.getElementById("resetbutton");
const contadorpalabras = document.querySelector('li[data-testid="word-count"]');
const contadorcaracteres = document.querySelector('li[data-testid="character-count"]');
const caracteressinespacio = document.querySelector('li[data-testid="character-no-spaces-count"]');
const contarnumeros = document.querySelector('li[data-testid="number-count"]');
const sumanumeros = document.querySelector('li[data-testid="number-sum"]');
const mediapalabras = document.querySelector('li[data-testid="word-length-average"]');

// Agregar un evento de escucha cuando se ingresa texto
textarea.addEventListener('input', () => {
  const texto = textarea.value;

  // Calcular el recuento de palabras
  const wordCount = analyzer.getWordCount(texto);
  contadorpalabras.textContent = 'Recuento de palabras: ' + wordCount;

  // Calcular el recuento de caracteres
  const characterCount = analyzer.getCharacterCount(texto);
  contadorcaracteres.textContent = 'Recuento de caracteres: ' + characterCount;

  //Calcular Recuento de caracteres excluyendo espacios y signos de puntuación
  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(texto);
  caracteressinespacio.textContent = 'Recuento de caracteres excluyendo espacios y signos de puntuación: ' + characterNoSpacesCount;

  // Contar cuantos numeros hay en el texto
  const NumberCount = analyzer.getNumberCount(texto);
  contarnumeros.textContent = 'Recuento de números: ' + NumberCount;

  // Suma total de los numeros en el texto
  const numberSum = analyzer.getNumberSum(texto);
  sumanumeros.textContent = 'Suma total de números: ' + numberSum;

  const averageWordLength = analyzer.getAverageWordLength(texto);
  mediapalabras.textContent = 'Longitud media de las palabras: ' + averageWordLength;
});

resetbutton.addEventListener('click', function () {
  if (textarea.value === "") {
    alert("El campo de texto ya está vacío");
  } else {
    textarea.value = '';
    contadorpalabras.textContent = "Recuento de palabras: 0"
    contadorcaracteres.textContent = 'Recuento de caracteres: 0'
    caracteressinespacio.textContent = 'Recuento de caracteres excluyendo espacios y signos de puntuación: 0 '
    contarnumeros.textContent = 'Recuento de números: 0'
    sumanumeros.textContent = 'Suma total de números: 0 '
    mediapalabras.textContent = 'Longitud media de las palabras: 0 '

  }

});
