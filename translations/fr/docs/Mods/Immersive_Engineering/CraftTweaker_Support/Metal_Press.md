# Metal Press

The Metal Press package can be used to add/remove recipes to/from the Immersive Engineering Metal Press.

## Calling The Package

You can call the MetalPress package using `mods.immersiveengineering.MetalPress`.

## Ajouter une recette

| Required | Type de texte | Type de données                                    |
| -------- | ------------- | -------------------------------------------------- |
| Required | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Required | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Mold          | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Required | Energy        | Nombre entier                                      |
| Required | Input Size    | Nombre entier                                      |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Remove Recipe

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Remove By Mold

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```