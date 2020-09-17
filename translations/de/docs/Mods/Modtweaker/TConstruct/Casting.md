# Gießen

Das `Casting` Paket ermöglicht das Hinzufügen oder Entfernen von Casting-Rezepten.

## Anruf

Du kannst das Casting-Paket mit `mods.tconstruct.Casting` aufrufen

## Casting-Rezepte hinzufügen

You can add recipes for both, casting tables and basins: The methods are equal in their parameters, varying only in their names.

```zenscript
//mods.tconstruct.Casting.addTableRecipe(IItemStack Ausgabe, IIngrediente cast, ILiquidStack Fluid, Int, @Optional boolean consumeCast, @Optional int time);
mods. construct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
Mods. construct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct. asting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true 200);


//Mods. construct.Casting.addBasinRecipe(IItemStack Output, IIngredient cast, ILiquidStack fluid, Int, @Optional boolean consumeCast, @Optional int time);
Mods. construct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
Mods. construct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true 200);
```

## Casting-Rezepte entfernen

Entfernen von Rezepten ist auch für das Casten von Tischen und Becken möglich:

```zenscript
//mods.tconstruct.Casting.removeTableRecipe(IItemStack output);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>);

//mods.tconstruct.Casting.removeTableRecipe(IItemStack output, ILiquidStack input);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>, <liquid:molten_iron>);



//mods.tconstruct.Casting.removeBasinRecipe(IItemStack output);
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:gold_block>);

//mods.tconstruct.Casting.removeBasinRecipe(IItemStack output, ILiquidStack input);
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:gold_block>, <liquid:molten_gold>);
```