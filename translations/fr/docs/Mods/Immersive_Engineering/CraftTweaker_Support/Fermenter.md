# Fermenteur

Le paquet Fermenter peut être utilisé pour ajouter/retirer des recettes vers/de la Fermenterie d'Ingénierie Immersive.

## Appeler le paquet

Vous pouvez appeler le paquet Fermenter en utilisant `mods.immersiveengineering.Fermenter`.

## Ajouter une recette

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Sortie        | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Requis | Fluide        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)       |
| Requis | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Énergie       | Nombre entier                                      |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(sortie IItemStack, fluide ILiquidStack, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Supprimer la recette de fluide

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Supprimer la recette d'article

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(sortie IItemstack);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Supprimer par entrée

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```