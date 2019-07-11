# Lubricant Registration

## registerLubricant

| Type     | Datentyp                                     |
| -------- | -------------------------------------------- |
| Input    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick | Integer                                      |

### Beispielcode:

```JAVA
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```