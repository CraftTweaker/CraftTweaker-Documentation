# Commerce elfique

Le paquet ElvenTrade est utilisé pour ajouter ou supprimer des recettes de/vers le portail Botania vers Alfheim.

## Appel en cours

Vous pouvez appeler le package ElvenTrade en utilisant `mods.botania.ElvenTrade`

## Trouver toutes les recettes enregistrées

Vous pouvez trouver toutes les recettes ElvenTrade enregistrées en utilisant les échanges [`/ct botania`](/Mods/Modtweaker/Botania/Commands/).

## Ajout de recette

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] sortie, IIngredient[] input);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Suppression de la recette

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```