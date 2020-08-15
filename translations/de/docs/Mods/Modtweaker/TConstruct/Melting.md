# Schmelzen

Das `Schmelzen` Paket ermöglicht das Hinzufügen oder Entfernen von Schmelzrezepten (Artikel->Flüssigkeit im Schmelz).

## Anruf

Sie können das Schmelzpaket mit `mods.tconstruct.Melting` aufrufen

## Schmelzrezepte hinzufügen

```zenscript
//mods.tconstruct.Melting.addRecipe(ILiquidStack output, IIngredient input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting. ddRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition entity, ILiquidStack stack);
//Sie können ein vorhandenes Rezept einfach überschreiben, Sie müssen es nicht zuerst entfernen!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## Schmelzrezepte entfernen

```zenscript
//mods.tconstruct.Melting.removeRecipe(ILiquidStack output);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack input);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

//removeEntityMelting(IEntityDefinition entity);
mods.tconstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```