# 与非运算符

**NAND**门就是一个翻转的**AND**门 这与把**AND**的输出作为**NOT**的输入是一样的。 这意味着**NAND**门在所有情况下都返回`TRUE`，除了两个输入同时为`TRUE`时

| 输入1 | 输入2 | 输出 |
| --- | --- | --:|
| 0   | 0   |  1 |
| 0   | 1   |  1 |
| 1   | 0   |  1 |
| 1   | 1   |  0 |

    空白示例：
    nand|[]~[]
    
    举例：
    nand|[reskillable:defence|24]~[reskillable:agility|24]
    

## 使用例

当一个玩家的防御等级和灵巧等级都到达了24级后，不允许他们使用皮革护甲

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```