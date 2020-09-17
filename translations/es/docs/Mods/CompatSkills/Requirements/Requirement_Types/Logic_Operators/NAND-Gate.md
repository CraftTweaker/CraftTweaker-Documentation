# Operador de la NAND

Una compuerta **de la NAND** es una compuerta invertida **Y**. Esto es lo mismo que usar la salida de la compuerta **AND** que la entrada a la compuerta **NOT**. Esto significa que la compuerta **** NAND devuelve `TRUE` en todos los casos excepto cuando ambas entradas también son `TRUE`.

| Input 1 | Input 2 | Salida |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      1 |
| 1       | 0       |      1 |
| 1       | 1       |      0 |

    Ejemplo vacío:
    nand|[]~[]
    
    Ejemplo rellenado:
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## Caso de uso

Una vez que un jugador alcanza el nivel de defensa 24 y el nivel de agilidad 24 deja de permitirles usar armadura de cuero:

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```