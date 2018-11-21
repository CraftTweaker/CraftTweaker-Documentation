# NAND Operator

A **NAND** gate is an inverted **AND** gate. This is the same as using the output of the **AND** gate as the input to the **NOT** gate. This means that the **NAND** gate returns `TRUE` in all cases except for when both inputs are also `TRUE`.

| Input 1 | Input 2 | Output |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      1 |
| 1       | 0       |      1 |
| 1       | 1       |      0 |

    Empty Example:
    nand|[]~[]
    
    Filled-In Example:
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## Use-Case

Once a player gets to defense level 24 and agility level 24 stop allowing them to use leather armor:

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");