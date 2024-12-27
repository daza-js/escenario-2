# Aplicación de Cálculo de Días del Mes

## Descripción

Esta aplicación permite calcular el número de días que tiene un mes específico en un año determinado. Los usuarios ingresan un número de mes y un año, y la aplicación devuelve la cantidad de días de ese mes, considerando las reglas de los años bisiestos.

## Uso

1. El usuario debe ingresar dos valores:

   - El número del mes (entre 1 y 12).
   - El año (un número entero positivo).

2. La aplicación calculará el número de días del mes ingresado, considerando las reglas siguientes:

   - Los meses 1, 3, 5, 7, 8, 10, y 12 tienen 31 días.
   - Los meses 4, 6, 9, y 11 tienen 30 días.
   - El mes de febrero puede tener 28 días, o 29 días si el año es bisiesto.

3. Si el año es bisiesto, el mes de febrero tendrá 29 días. Para determinar si un año es bisiesto, se deben seguir las siguientes reglas:

   - Un año es bisiesto si es múltiplo de 4, pero no de 100, o si es múltiplo de 400.

4. El resultado se mostrará en pantalla, indicando el número de días del mes solicitado.

## Casos de Uso

### Caso de Uso 1: Mes de 31 días

- **Entrada:**

  - Mes: 1 (Enero)
  - Año: 2024

- **Salida:**
  - El mes de Enero tiene 31 días.

### Caso de Uso 2: Mes de 30 días

- **Entrada:**

  - Mes: 4 (Abril)
  - Año: 2023

- **Salida:**
  - El mes de Abril tiene 30 días.

### Caso de Uso 3: Febrero en un año bisiesto

- **Entrada:**

  - Mes: 2 (Febrero)
  - Año: 2024

- **Salida:**
  - El mes de Febrero tiene 29 días (año bisiesto).

### Caso de Uso 4: Febrero en un año no bisiesto

- **Entrada:**

  - Mes: 2 (Febrero)
  - Año: 2023

- **Salida:**
  - El mes de Febrero tiene 28 días.

### Caso de Uso 5: Año no bisiesto divisible por 4 y 100

- **Entrada:**

  - Mes: 2 (Febrero)
  - Año: 2100

- **Salida:**
  - El mes de Febrero tiene 28 días (año no bisiesto).
