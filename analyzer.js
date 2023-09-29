const analyzer = {
  getWordCount: (text) => {
    // Eliminar espacios en blanco al principio y al final del texto
    text = text.trim();
    // Si el texto está vacío, retornar 0
    if (text === '') {
      return 0
    }
    // Dividir el texto en palabras utilizando espacios en blanco como separadores
    const words = text.split(/\s+/);

    // Retornar la cantidad de palabras, permite obtener y mostrar la cantidad de palabras en el resultado.
    return words.length;
  },
  getCharacterCount: (text) => {
    // Eliminar espacios en blanco al principio y al final del texto
    text = text.trim();

    // Retornar la longitud del texto, que representa la cantidad de caracteres
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // Eliminar espacios en blanco al principio y al final del texto
    text = text.trim();

    // Eliminar espacios entre palabras
    text = text.replace(/\s+/g, '');

    // Eliminar espacios y signos de puntuación
    text = text.replace(/[^A-Za-z\s]/g, '');

    // Retornar la longitud del texto limpio, que representa la cantidad de caracteres excluyendo espacios y signos de puntuación
    return text.length;
  },

  getNumberCount: (text) => {
    // Utilizar una expresión regular para buscar todas las secuencias de dígitos y números decimales que no estén unidos a letras
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);

    // Si no se encuentran números, retornar 0
    if (!numbers) {
      return 0;
    }

    // Retornar la cantidad de números encontrados
    return numbers.length;
  },



  getNumberSum: (text) => {
    let sum = 0; // Inicializar el acumulador de suma

    // Utilizar una expresión regular para buscar números enteros y decimales no unidos a letras
    const numberMatches = text.match(/\b[-+]?\d+(\.\d*)?\b/g);

    if (numberMatches) {
      for (const match of numberMatches) {
        const numero = parseFloat(match); // Convertir la coincidencia en un número decimal
        if (!isNaN(numero)) {
          sum += numero; // Sumar el número actual al acumulador (sum)
        }
      }
    }

    return sum;
  },

  getAverageWordLength: (text) => {
    // Dividir el texto en palabras utilizando espacios en blanco como separadores
    const words = text.split(" ");
    
    let totalLength = 0; // Inicializar la suma de las longitudes
  
    // Iterar a través de las palabras para calcular la suma de las longitudes
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }
  
    // Calcular la longitud media
    const averageLength = totalLength / words.length;
  
    // Redondear la longitud media a dos decimales
    return parseFloat(averageLength.toFixed(2));
  },

  
};

export default analyzer;
