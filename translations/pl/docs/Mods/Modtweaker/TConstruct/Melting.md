# Wytapianie

Pakiet `Wytapianie` pozwala na dodanie lub usunięcie przepisów dotyczących topienia (przedmiot->ciecz w wytapianiu).

## Dzwonienie

Możesz wywołać paczkę topnienia używając `mods.tconstruct.Melting`

## Dodaj przepisy topnienia

```zenscript
//mods.tconstruct.Melting.addRecipe(ILiquidStack, IIngredient Input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting. ddRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition entity stack, ILiquidStack stack);
//Możesz po prostu zastąpić istniejący przepis, nie musisz go najpierw usunąć!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## Usuwanie przepisów topnienia

```zenscript
//mods.tconstruct.Melting.removeRecipe(ILiquidStack output);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

//removeEntityMelting(IEntityDefinition entity );
mods.tconstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```