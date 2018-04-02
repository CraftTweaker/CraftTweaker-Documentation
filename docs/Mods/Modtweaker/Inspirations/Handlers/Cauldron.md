# Cauldron

The Cauldron package is used for adding/removing recipes for the cauldron. Note that if the cauldron is set to `simple` in the config, only recipes using water will be able to be crafted but all recipes will still show in JEI.

## Calling
You can call the Cauldron package using `mods.inspirations.Cauldron`

## Fluids

Inspirations features two types of recipes using fluids: ones to transform an item using a fluid and ones to transform a fluid using an item. While all the handlers take on a fluid stack, only the fluid type will affect the recipe. Inspirations cauldrons use the vanilla system of three bottles in a cauldron so amounts are handled in another parameter.

### Fluid adding

Adds a recipe converting the input item to the output item using the fluid.

* Input item supports stack sizes to require the held stack to be a certain size.
* Levels determines how many levels are consumed by the recipe. Supports 0-3, defaulting to 1
* Boiling determines if the cauldron must be placed above fire for the recipe. Can be true to require it, false to require not having fire, or null (default) to ignore it.
```
//mods.inspirations.Cauldron.addFluidRecipe(IItemStack output, IIngredient input, ILiquidStack fluid, @Optional int levels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Fluid removal

Removes an existing fluid recipe from the cauldron.

```
//mods.inspirations.Cauldron.removeFluidRecipe(IIngredient output, @Optional IIngredient input, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Fluid transform adding

Adds a recipe converting the fluid to the output fluid using the item.

* Input item supports stack sizes to require the held stack to be a certain size.
* Max level determines the maximum amount of fluid allowed for this transformation to happen. Used to allow recipes to have a cheaper version if the cauldron contains less fluid.
* Boiling determines if the cauldron must be placed above fire for the recipe. Can be true to require it, false to require not having fire, or null (default) to ignore it.

```
//mods.inspirations.Cauldron.addFluidTransform(ILiquidStack output, IIngredient input, ILiquidStack fluid, @Optional int maxLevels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Fluid transform removal

Removes an existing fluid transform recipe from the cauldron. Output is `IIngredient` but only supports a fluid stack or wildcard.

```
//mods.inspirations.Cauldron.removeFluidTransform(IIngredient output, [IIngredient input, [IFluidStack fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

## Brewing and Potions

Inspirations features two types of potion recipes using potions: brewing recipes that change a potion from one type into another, and potion recipes that change an item using a potion.

Since the recipes take on `PotionType`'s instead of `Potion`'s directly, potion parameters are strings. A list of all potion types can be obtained using the command `/ct inspirations potions`.

### Brewing adding

Adds a recipe converting the input potion to the output potion using the reagent.

```
//mods.inspirations.Cauldron.addBrewingRecipe(String output, String input, IIngredient reagent);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### Brewing removal

Removes an existing brewing recipe from the cauldron. Both input and output can be set to null to act as a wildcard.

```
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Potion recipe adding

Adds a recipe converting the input item to the output item using the potion.

* Levels determines how many levels are consumed by the recipe. Supports 0-3, defaulting to 1
* Boiling determines if the cauldron must be placed above fire for the recipe. Can be true to require it, false to require not having fire, or null (default) to ignore it.

```
//mods.inspirations.Cauldron.addPotionRecipe(IItemStack output, IIngredient input, String potion, @Optional int levels, @Optional boolean boiling);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### Potion recipe removal

Removes an existing potion recipe from the cauldron. By default no potion recipes exist but addons may add a recipe.

```
//mods.inspirations.Cauldron.removePotionRecipe(IIngredient output, @Optional IIngredient input, @Optional String potion);
```

## Dyes

Inspirations features only one type of dye recipe to transform an item using a dye. Dye recipes take on a string dye color which represents a value from `EnumDyeColor`. To get a list of all values, the command `/ct inspirations dyes` is provided.

### Adding

Adds a recipe converting the input to the output using the dye consuming a single level of dyed water.

```
//mods.inspirations.Cauldron.addDyeRecipe(IItemStack output, IIngredient input, String dye);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Removal

Removes an existing dye recipe from the cauldron.

```
//mods.inspirations.Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```