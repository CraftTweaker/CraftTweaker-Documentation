# Autel de Rune

Le paquet RuneAltar est utilisé pour ajouter ou supprimer des recettes de/vers l’autel Botania Rune.

## Appel en cours

Vous pouvez appeler le package RuneAltar en utilisant `mods.botania.RuneAltar`

## Trouver toutes les recettes enregistrées

Vous pouvez trouver toutes les recettes Rune Autar enregistrées en utilisant [`/ct botania altar`](/Mods/Modtweaker/Botania/Commands/).

## Ajout de recette

```zenscript
//mods.botania.RuneAltar.addRecipe(IItemStack, IIngredient[] input, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Suppression de la recette

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```