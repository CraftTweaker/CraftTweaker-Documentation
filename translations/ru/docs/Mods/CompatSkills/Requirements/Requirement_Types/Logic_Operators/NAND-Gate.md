# Оператор NAND

**NAND** ворота являются обратными **И** воротами. Это то же самое, что и использование выходных данных **И** ворот, что и входные данные на порог **НЕ** входа. Это означает, что **NAND** ворота возвращает `TRUE` во всех случаях, за исключением случаев, когда оба входа также `TRUE`.

| Input 1 | Input 2 | Вывод |
| ------- | ------- | -----:|
| 0       | 0       |     1 |
| 0       | 1       |     1 |
| 1       | 0       |     1 |
| 1       | 1       |     0 |

    Пустой пример:
    nand|[]~[]
    
    Заполнил- например:
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## Вариант использования

Как только игрок достигнет 24 уровня защиты и 24 уровня ловкости, он сможет использовать кожаную броню:

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```