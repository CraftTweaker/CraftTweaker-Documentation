# NOR Operator

A **NOR** gate is an inverted **OR** gate. This is the same as using the output of the **OR** gate as the input to the **NOT** gate. This means that the **NOR** gate returns `TRUE` only when both inputs are `FALSE`.

| Input 1 | Input 2 | Output |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      0 |

    Empty Example:
    nor|[]~[]
    
    Filled-In Example:
    nor|[reskillable:mining|5]~[reskillable:gathering|5]
    

## Use-Case

Only allow using a wooden shovel until the player gets mining or gathering level 5:

    addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");