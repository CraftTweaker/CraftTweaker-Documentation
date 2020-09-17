# Operator NAND

Brama **NAND** jest bramką **I**. To samo co na wyjściu bramki **AND** co wejście bramki **NOT**. Oznacza to, że bramka **NAND** zwraca `TRUE` we wszystkich przypadkach, z wyjątkiem sytuacji, gdy oba wejścia są również `TRUE`.

| Input 1 | Input 2 | Wyjście |
| ------- | ------- | -------:|
| 0       | 0       |       1 |
| 0       | 1       |       1 |
| 1       | 0       |       1 |
| 1       | 1       |       0 |

    Pusty przykład:
    nand|[]~[]
    
    Wypełniono przykład:
    nand|[przekwalifikowalne:defens|24]~[przekwalifikowalne:agility|24]
    

## Przycisk

Gdy gracz dotrze do poziomu 24 i umiejętności 24 przestaje używać skórzanego pancerza:

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[przekwalifikowalne:obrona|24]~[przekwalifikowalne:agility|24]");
addRequire(<minecraft:leather_chestplate:*>, "nand|[przekwalifikowalne:defse|24]~[przekwalifikowalne:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[przekwalifikowalne:defens|24]~[przekwalifikowalne:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[przekwalifikowalne|24]~[przekwalifikowalne:agility|24]");
```