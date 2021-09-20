# Lubricant Registration

## registerLubricant

| 类型       | Datentyp                                     |
| -------- | -------------------------------------------- |
| 输入       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick | 整型                                           |

### Beispielcode:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```