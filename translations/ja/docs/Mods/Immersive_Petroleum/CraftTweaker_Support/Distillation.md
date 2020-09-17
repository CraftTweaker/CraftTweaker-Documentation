# <unk>

## addRecipe

蒸留"addRecipe"メソッドは以下から構成されています。

| タイプ     | データタイプ                                            |
| ------- | ------------------------------------------------- |
| 出力      | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) 配列[] |
| 出力      | [ItemStack](/Vanilla/Items/IItemStack/) 配列 []     |
| Input   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)      |
| Flux/t  | 整数                                                |
| 開始までの時間 | 整数                                                |
| チャンス    | Float Array []                                    |

### 前面:

各 ItemStack エントリは、対応する "Chance" 配列エントリにリンクされます。

例

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

確率"浮動小数点"の値は0から1の間でなければなりません。 Since it converts it from a float value to a percentage value between 0% and 100% I.E:

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

1 より高いフロートを送信できますが、値が 100% 以上になることはありません。

### コード例:

```zenscript
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods.immersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```