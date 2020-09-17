# NOR Operator

Ein **NOR** Tor ist ein invertiertes **ODER** Tor. Dies ist das Gleiche wie die Verwendung der Ausgabe des **ODER** Gates als Eingabe am **NICHT** Gate. Das bedeutet, dass das **NOR** Gate `TRUE` nur zurückgibt, wenn beide Eingaben `FALSE` sind.

| Input 1 | Input 2 | Ausgang |
| ------- | ------- | -------:|
| 0       | 0       |       1 |
| 0       | 1       |       0 |
| 1       | 0       |       0 |
| 1       | 1       |       0 |

    Leeres Beispiel:
    nor|[]~[]
    
    Gefülltes Beispiel:
    nor|[reskillable:mining|5]~[reskillable:Sammeln|5]
    

## Verwendungsfall

Erlaube nur die Verwendung einer Holzschaufel bis der Spieler Bergbau oder Sammellevel 5 erhält:

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:Sammeln|5]");
```