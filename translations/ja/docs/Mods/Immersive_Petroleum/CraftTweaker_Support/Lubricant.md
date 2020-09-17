# 潤滑剤の登録

## registerLubricant

| タイプ      | データタイプ                                       |
| -------- | -------------------------------------------- |
| Input    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| MB/4tick | 整数                                           |

### コード例:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```