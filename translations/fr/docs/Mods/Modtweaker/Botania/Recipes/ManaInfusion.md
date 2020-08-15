# Mana Infusion

Le paquet ManaInfusion est utilisé pour ajouter ou supprimer des recettes vers/de la Botania ManaPool.

## Appel en cours

Vous pouvez appeler le paquet ManaInfusion en utilisant `mods.botania.ManaInfusion`

## Trouver toutes les recettes enregistrées

Vous pouvez trouver toutes les recettes de ManaInfusion enregistrées en utilisant [`/ct botania perfusions`](/Mods/Modtweaker/Botania/Commands/).

## Ajout de recette

```zenscript
//mods.botania.ManaInfusion.addInfusion.addInfusion(IItemStack sortie, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(IItemStack, IIngredient input, int mana);
mods. otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Suppression de la recette

```zenscript
//mods.botania.ManaInfusion.removeRecipe(IIngredient output);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```