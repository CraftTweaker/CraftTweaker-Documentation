# NAND演算子

**NAND** ゲートは反転した **AND** ゲートです。 これは、 **NOT** ゲートへの入力として **AND** ゲートの出力を使用するのと同じです。 これは、両方の入力が **TRUE** である場合を除いて、 `NAND` ゲートがすべての場合に `TRUE`を返すことを意味します。

| Input 1 | Input 2 | 出力 |
| ------- | ------- | --:|
| 0       | 0       |  1 |
| 0       | 1       |  1 |
| 1       | 0       |  1 |
| 1       | 1       |  0 |

    空の例:
    nand|[]~[]
    
    塗りつぶされた例:
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## ユースケース：

一度プレイヤーが防御レベル24に到達し、敏捷性レベル24のストップは、彼らが革の鎧を使用することができます:

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```