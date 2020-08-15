# Operator NOR

Bramka **NOR** jest bramką **LUB**. To samo co na wyjściu bramki **OR** co na wejściu bramki **NOT**. Oznacza to, że bramka **NOR** zwraca `TRUE` tylko wtedy, gdy oba wejścia są `FALSE`.

| Input 1 | Input 2 | Wyjście |
| ------- | ------- | -------:|
| 0       | 0       |       1 |
| 0       | 1       |       0 |
| 1       | 0       |       0 |
| 1       | 1       |       0 |

    Pusty przykład:
    nor|[]~[]
    
    Wypełniono przykład:
    nor|[przekwalifikowalne :mining|5]~[przekwalifikowalne :gathering|5]
    

## Przycisk

Zezwalaj tylko na używanie drewnianej łopaty, dopóki gracz nie wydobywa lub nie zbierze 5 poziomu:

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[przekwalifikowalne:mining|5]~[przekwalifikowalne:gromadzenie|5]");
```