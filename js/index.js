/**
 * Obtiene el número de días en un mes específico de un año específico.
 * La función verifica si los parámetros de entrada son válidos (mes entre 1 y 12, y año positivo).
 * Si el mes es febrero (2), también comprueba si el año es bisiesto para ajustar el número de días a 29 en lugar de 28.
 * En caso de parámetros inválidos, muestra una alerta al usuario.
 */
function getDaysInMonth(month, year) {
  if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
    alert("Por favor, ingresa un mes (1-12) y un año válido.");
    return;
  }

  // Array que contiene el número de días en cada mes del año, donde el índice 0 corresponde a enero, el índice 1 a febrero, y así sucesivamente.
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Variable que almacena el número de días del mes especificado, restando 1 al mes para obtener el índice correcto del array.
  let days = daysInMonth[month - 1];

  // Comprueba si el año es bisiesto en febrero
  if (month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeapYear) {
      days = 29;
    }
  }

  return days;
}

/**
 * Función que maneja el evento de mostrar los días de un mes específico.
*/
function displayDays(event) {
  event.preventDefault();

  // Obtiene el valor del mes y el año desde los elementos del DOM y los convierte a enteros.
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Obtiene el número de días en el mes y año especificados.
  const days = getDaysInMonth(month, year);

  // Si se obtuvieron los días correctamente, actualiza el contenido del DOM para mostrar el resultado.
  if (days) {
    const resultText = `El mes ${month} del año ${year} tiene ${days} días.`;
    document.getElementById("result").textContent = resultText;
    document.getElementById("output").style.display = "block";
  }
}

document.getElementById("daysForm").addEventListener("submit", displayDays);
