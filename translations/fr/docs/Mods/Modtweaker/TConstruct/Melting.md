# Fonte

Le pack `Melting` vous permet d'ajouter ou de supprimer des recettes de fusion (objet->liquide dans la fonderie).

## Appel en cours

Vous pouvez appeler le pack Melting en utilisant `mods.tconstruct.Melting`

## Ajouter des recettes de fusion

```zenscript
//mods.tconstruct.Melting.addRecipe(ILiquidStack sortie, IIngredient input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting. ddRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition entity, ILiquidStack stack);
//Vous pouvez juste remplacer une recette existante, vous n'avez pas besoin de la supprimer d'abord!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## Suppression des recettes de fusion

```zenscript
//mods.tconstruct.Melting.removeRecipe(ILiquidStack output);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack input);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

//removeEntityMelting(IEntityDefinition entity);
mods.tconstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```