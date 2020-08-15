# Alloy Smelter

The Alloy Smelter package can be used to add/remove recipes to/from the Immersive Engineering Alloy Smelter.

## Calling The Package

You can call the AlloySmelter package using `mods.immersiveengineering.AlloySmelter`

## Ajouter une recette

| Required | Type de texte | Type de données                                    |
| -------- | ------------- | -------------------------------------------------- |
| Required | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Required | Input 1       | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Input 2       | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time          | Nombre entier                                      |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Remove Recipe

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```