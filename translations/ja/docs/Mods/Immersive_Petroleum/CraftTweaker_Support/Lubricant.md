# Lubricant Registration

## registerLubricant

| Type     | Data Type                                    |
| -------- | -------------------------------------------- |
| Input    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick | Integer                                      |

### Code Example:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```