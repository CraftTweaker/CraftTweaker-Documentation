# Kitchen Appliances

## Package
`moretweaker.cfb.KitchenAppliances;`

## Addition

```zenscript
//moretweaker.cfb.KitchenAppliances.addToasterRecipe(IItemStack output, IIngredient input);
moretweaker.cfb.KitchenAppliances.addToasterRecipe(<some_cool_mod:toast>, <minecraft:bread>);

//moretweaker.cfb.KitchenAppliances.addSinkRecipe(IItemStack output, IIngredient input);
moretweaker.cfb.KitchenAppliances.addSinkRecipe(<minecraft:banner:15>, <minecraft:banner:*>);

//moretweaker.cfb.KitchenAppliances.addOvenRecipe(IItemStack output, IIngredient input);
moretweaker.cfb.KitchenAppliances.addOvenRecipe(<minecraft:dirt>, <minecraft:gravel>);

//moretweaker.cfb.KitchenAppliances.addFoodShapeless(IItemStack output, IIngredient[] inputs);
moretweaker.cfb.KitchenAppliances.addFoodShapeless(<minecraft:diamond>, [<minecraft:gold_ingot>, <minecraft:iron_ingot>]);

//moretweaker.cfb.KitchenAppliances.addFoodShaped(IItemStack output, IIngredient[][] inputs);
moretweaker.cfb.KitchenAppliances.addFoodShaped(<minecraft:diamond>, [[<minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, <minecraft:gold_ingot>]]);
```

## Removal

```zenscript
//moretweaker.cfb.KitchenAppliances.removeToasterRecipe(IIngredient output);
moretweaker.cfb.KitchenAppliances.removeToasterRecipe(<minecraft:bread>);

//moretweaker.cfb.KitchenAppliances.removeAllToasterRecipes();
moretweaker.cfb.KitchenAppliances.removeAllToasterRecipes();

//moretweaker.cfb.KitchenAppliances.removeSinkRecipe(IIngredient output);
moretweaker.cfb.KitchenAppliances.removeSinkRecipe(<minecraft:banner>);

//moretweaker.cfb.KitchenAppliances.removeAllSinkRecipes();
moretweaker.cfb.KitchenAppliances.removeAllSinkRecipes();

//moretweaker.cfb.KitchenAppliances.removeOvenRecipe(IIngredient output);
moretweaker.cfb.KitchenAppliances.removeOvenRecipe(<minecraft:cooked_porkchop>);

//moretweaker.cfb.KitchenAppliances.removeAllOvenRecipes();
moretweaker.cfb.KitchenAppliances.removeAllOvenRecipes();

//moretweaker.cfb.KitchenAppliances.removeFoodRecipe(IIngredient output);
moretweaker.cfb.KitchenAppliances.removeFoodRecipe(<minecraft:musroom_stew>);

//moretweaker.cfb.KitchenAppliances.removeAllFoodRecipes();
moretweaker.cfb.KitchenAppliances.removeAllFoodRecipes();
```