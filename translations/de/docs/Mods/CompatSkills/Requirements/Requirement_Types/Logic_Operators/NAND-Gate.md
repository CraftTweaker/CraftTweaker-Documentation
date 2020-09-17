# NAND-Betreiber

Ein **NAND** Tor ist ein invertiertes **UND** Tor. Dies ist das Gleiche wie die Verwendung der Ausgabe des **UND** Gates als Eingabe für das **NICHT** Gate. Das bedeutet, dass das **NAND** Gate `TRUE` in allen Fällen zurückgibt, außer wenn beide Eingaben auch `TRUE` sind.

| Input 1 | Input 2 | Ausgang |
| ------- | ------- | -------:|
| 0       | 0       |       1 |
| 0       | 1       |       1 |
| 1       | 0       |       1 |
| 1       | 1       |       0 |

    Leeres Beispiel:
    nand|[]~[]
    
    Gefülltes Beispiel:
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## Verwendungsfall

Sobald ein Spieler das Level 24 und die Beweglichkeit Level 24 erreicht hat, kann er Lederrüstungen verwenden:

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```