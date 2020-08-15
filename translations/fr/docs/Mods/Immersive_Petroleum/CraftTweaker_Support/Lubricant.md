# Lubricant Registration

## registerLubricant

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick      | Nombre entier                                |

### Code Example:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```