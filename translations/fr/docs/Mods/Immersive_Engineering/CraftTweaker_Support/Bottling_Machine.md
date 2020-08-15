# Bottling Machine

## Calling The Package

You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## Ajouter une recette

| Required | Type de texte | Type de données                                    |
| -------- | ------------- | -------------------------------------------------- |
| Required | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Required | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Fluide        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)       |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Remove Recipe

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```