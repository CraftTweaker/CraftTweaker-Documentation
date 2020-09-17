# Y Operador

Una compuerta **AND** combina dos entradas y devuelve `TRUE` sólo si ambas entradas también son `TRUE`.

| Input 1 | Input 2 | Salida |
| ------- | ------- | ------:|
| 0       | 0       |      0 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      1 |

El requerimiento AND a diferencia de los otros requisitos lógicos es principalmente útil para requerimientos lógicos anidados. como bloqueo de un elemento u otro objeto con múltiples requisitos requiere que se cumplan todos los requisitos dados. Esto es lo mismo que la funcionalidad AND, así que debe ser usado cuando sea posible, ya que hará que la descripción sea formateada de una manera más fácil de leer.

    Ejemplo vacío:
    Y|[]~[]