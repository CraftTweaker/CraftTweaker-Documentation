# Séchage

Le paquet `séchage` vous permet d'ajouter ou de retirer des recettes de séchage.

## Appel en cours

Vous pouvez appeler le paquet de séchage en utilisant `mods.tconstruct.Drying`

## Ajout en cours

L'heure est en ticks

```zenscript
//mods.tconstruct.Drying.addRecipe(sortie IItemStack, entrée IIngredient, temps int);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Enlèvement

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```