# Melting

The `Melting` package allows you to add or remove Melting recipes (item->liquid in the smeltery).

## Calling
You can call the Melting package using `mods.tconstruct.Melting`

## Add Melting Recipes

```JAVA
//mods.tconstruct.Melting.addRecipe(ILiquidStack output, IItemStack input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting.addRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition entity, ILiquidStack stack);
//You can just override an existing recipe, you don't need to remove it first!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## Removing Melting Recipes

```JAVA
//mods.tconstruct.Melting.removeRecipe(ILiquidStack output);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack input);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

//removeEntityMelting(IEntityDefinition entity);
mods.tconstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```