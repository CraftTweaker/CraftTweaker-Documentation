# Fermenteur

ModTweaker vous permet d'ajouter ou de supprimer des recettes de fermeneur forestier

## Appel en cours

You can call the package using `mods.forestry.Fermenter`

## Suppression de la recette

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## Ajout de recette

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, IItemStack resource, ILiquidStack fluidInput, int fermentationValue, float fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

Quantité de sortie de fluide: fermentationValue * fluidOutputModifier

| Paramètre                        | Type de texte                                  | Libellé                                                |
| -------------------------------- | ---------------------------------------------- | ------------------------------------------------------ |
| fluidOutput                      | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Sortie de la recette                                   |
| Ressource                        | [IItemStack](/Vanilla/Items/IItemStack/)       | La saisie de l'élément de la recette                   |
| fluidInput                       | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Entrée de liquide de la recette                        |
| valeur de fermentation           | Indice                                         | Quantité de fluide sur les produits organiques requise |
| modificateur de sortie de fluide | Indice                                         | Multiplicateur de sortie                               |

## Retrait de Carburant

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## Ajout de carburant

```zenscript
//mods.forestry.Fermenter.addFuel(IItemStack, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| Paramètre               | Type de texte                            | Libellé                                                                                              |
| ----------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Élément                 | [IItemStack](/Vanilla/Items/IItemStack/) | Objet pour devenir un combustible valide pour le fermenteur                                          |
| Période de fermentation | Indice                                   | Combien est fermenté par cycle de travail, c'est-à-dire combien de liquide de l'entrée est consommé. |
| durée de la combustion  | Indice                                   | Le nombre de cycles de travail d'un seul élément de ce carburant dure avant l'expiration.            |