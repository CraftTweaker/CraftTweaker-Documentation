# 与非运算符

A **NAND** gate is an inverted **AND** gate. This is the same as using the output of the **AND** gate as the input to the **NOT** gate. This means that the **NAND** gate returns `TRUE` in all cases except for when both inputs are also `TRUE`.

| 输入1 | 输入2 | 输出 |
| --- | --- | --:|
| 0   | 0   |  1 |
| 0   | 1   |  1 |
| 1   | 0   |  1 |
| 1   | 1   |  0 |


    空白示例：
    nand|[]~[]
    
    填写后举例：
    nand|[reskillable:defence|24]~[reskillable:agility|24]


## 案例

当一个玩家的防御等级和灵巧等级都到达了24级后，不允许他们使用皮革护甲

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```