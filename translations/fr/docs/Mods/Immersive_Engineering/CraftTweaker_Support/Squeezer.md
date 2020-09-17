# Squeezer

Le paquet Squeezer peut être utilisé pour ajouter/retirer des recettes de/vers le Requeezer d'Ingénierie Immersive.

## Appeler le paquet

Vous pouvez appeler le package Squeezer en utilisant `mods.immersiveengineering.Squeezer`.

## Ajouter une recette

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Sortie        | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Requis | Fluide        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)       |
| Requis | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Énergie       | Nombre entier                                      |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack sortie, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Supprimer la recette de fluide

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Supprimer la recette d'article

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Supprimer par entrée

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```