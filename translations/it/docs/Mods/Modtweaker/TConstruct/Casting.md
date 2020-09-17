# Casting

Il pacchetto `Casting` consente di aggiungere o rimuovere ricette Casting.

## Chiamata

Puoi chiamare il pacchetto Casting usando `mods.tconstruct.Casting`

## Aggiungi Ricette Di Casting

È possibile aggiungere ricette per entrambi, tavoli di fusione e bacini: I metodi sono uguali nei loro parametri, che variano solo nei loro nomi.

```zenscript
//mods.tconstruct.Casting.addTableRecipe(IItemStack output, IIngredient cast, ILiquidStack fluid, int amount, @Optional boolean consumeCast, @Optional int time);
mods. construct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
mods. construct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct. asting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true, 200);


//mods. construct.Casting.addBasinRecipe(IItemStack output, IIngredient cast, ILiquidStack fluid, int amount, @Optional boolean consumeCast, @Optional int time);
mods. construct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
mods. construct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true, 200);
```

## Rimozione Ricette Casting

La rimozione delle ricette è possibile anche per Casting Tavoli e Bacini:

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