# Operador NOR

Una compuerta **NOR** es una compuerta invertida **O**. Esto es lo mismo que usar la salida de la compuerta **OR** que la entrada a la compuerta **NOT**. Esto significa que la compuerta **NOR** devuelve `TRUE` sólo cuando ambas entradas son `FALSE`.

| Input 1 | Input 2 | Salida |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      0 |

    Ejemplo vacío:
    nor|[]~[]
    
    Ejemplo rellenado:
    nor|[reskillable:mining|5]~[reskillable:collecting|5]
    

## Caso de uso

Solo permite usar una pala de madera hasta que el jugador consiga minar o recolectar nivel 5:

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:collecting|5]");
```