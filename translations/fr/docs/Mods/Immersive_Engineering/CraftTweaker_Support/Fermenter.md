# Fermenter

The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Calling The Package

You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## Ajouter une recette

| Required | Type de texte | Type de données                                    |
| -------- | ------------- | -------------------------------------------------- |
| Required | Sortie        | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Required | Fluide        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)       |
| Required | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Energy        | Nombre entier                                      |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Remove Fluid Recipe

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Remove Item Recipe

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Remove By Input

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```