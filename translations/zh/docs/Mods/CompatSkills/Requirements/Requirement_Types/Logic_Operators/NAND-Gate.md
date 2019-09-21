# 与非运算符

**NAND**门就是一个翻转的**AND**门 这与把**AND**的输出作为**NOT**的输入是一样的。 这意味着**NAND**门在所有情况下都返回`TRUE`，除了两个输入同时为`TRUE`时

| 输入1 | 输入2 | 输出 |
| --- | --- | --:|
| 0   | 0   |  1 |
| 0   | 1   |  1 |
| 1   | 0   |  1 |
| 1   | 1   |  0 |

    Empty Example:
    nand|[]~[]
    
    Filled-In Example:
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## Use-Case

Once a player gets to defense level 24 and agility level 24 stop allowing them to use leather armor:

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```