# Fonderie d'Alliage

Le pack de Fonderie d'Alliage peut être utilisé pour ajouter/retirer des recettes à/de la Fonderie d'Alliage d'Ingénierie Immersive.

## Appeler le paquet

Vous pouvez appeler le package AlloySmelter en utilisant `mods.immersiveengineering.AlloySmelter`

## Ajouter une recette

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Requis | Input 1       | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Input 2       | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Date et heure | Nombre entier                                      |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack, IIngredient d'abord, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```