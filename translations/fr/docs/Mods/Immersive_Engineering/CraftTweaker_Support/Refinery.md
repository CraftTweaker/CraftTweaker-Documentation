# Refinery

The Refinery package can be used to add/remove recipes to/from the Immersive Engineering Refinery.

## Calling The Package

You can call the Refinery package using `mods.immersiveengineering.Refinery`.

## Ajouter une recette

| Required | Type de texte | Type de données                              |
| -------- | ------------- | -------------------------------------------- |
| Required | Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | Input 1       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | Input 2       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | Energy        | Nombre entier                                |

### Exemple

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Remove Recipe

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```