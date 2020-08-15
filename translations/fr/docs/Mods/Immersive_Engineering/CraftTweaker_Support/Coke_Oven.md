# Coke Oven

## Calling The Package

You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## Ajouter une recette

| Required | Type de texte | Type de données                                    |
| -------- | ------------- | -------------------------------------------------- |
| Required | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Required | Fuel Output   | Nombre entier                                      |
| Required | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time          | Nombre entier                                      |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Remove Recipe

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple:

```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```