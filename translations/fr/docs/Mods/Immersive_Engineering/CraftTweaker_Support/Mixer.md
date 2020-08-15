# Mixer

The Mixer package can be used to add/remove recipes to/from the Immersive Engineering Mixer.

## Calling The Package

You can call the Mixer package using `mods.immersiveengineering.Mixer`.

## Ajouter une recette

| Required | Type de texte | Type de données                                              |
| -------- | ------------- | ------------------------------------------------------------ |
| Required | Fluid Output  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Required | Fluid Input   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Required | Item Inputs   | [IIngredient](/Vanilla/Variable_Types/IIngredient/) as Array |
| Required | Energy        | Nombre entier                                                |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Remove Recipe

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```