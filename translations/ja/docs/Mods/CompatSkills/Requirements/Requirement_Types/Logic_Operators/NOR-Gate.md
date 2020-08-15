# NOR演算子

NOR **ゲート** は逆 **または** ゲートです。 これは、 **NOT** ゲートへの入力として **OR** ゲートの出力を使用するのと同じです。 This means that the **NOR** gate returns `TRUE` only when both inputs are `FALSE`.

| Input 1 | Input 2 | 出力 |
| ------- | ------- | --:|
| 0       | 0       |  1 |
| 0       | 1       |  0 |
| 1       | 0       |  0 |
| 1       | 1       |  0 |

    例:
    nor|[]~[]
    
    filled-In Example:
    nor|[reskillable:mining|5]~[reskillable:gating|5]
    

## ユースケース：

プレイヤーが採掘または採集レベル5になるまで、木製のシャベルを使用することができます:

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gating|5]');
```