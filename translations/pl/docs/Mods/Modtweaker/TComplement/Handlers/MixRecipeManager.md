# MixRecipeManager

A `MixRecipeManager` is used to modify existing high oven mix recipe, including those added by ModTweaker.

## Importing the package

Better be safe than sorry and import the package

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;
```

## Getting a `MixRecipeManager`

The `HighOven` handler can give you a `MixRecipeManager`:

```zenscript
// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `output` is the output of the mix recipe to modify
+ `input` (Optional) is the input of the mix recipe to modify. If `null` or unspecified, any mix recipe producing the output will be affected

## Removing additives

You can use a `MixRecipeManager` to remove certain additives from the affected mix recipe. Be carefull, for removals are always enforced. This means whatever way to add an additive that would add an additive you remove, will be prevented.

This may have surprising results with oredict entries. Since oredict entries are added as-is to the mix recipe (it is not expanded to a list of `IItemStack` but looked for when checking the recipes), removing an item will block all oredict entries it belongs to.

Generally speaking, if you remove something specific (say, an `IItemStack` with transformers) but an (single) additive addition would allow what you removed plus some other things (say, a more generic `IItemStack`), the whole addition will be cancelled, preventing said other things from being accepted by the High Oven.

| Method                                 | Info                                                      |
| -------------------------------------- | --------------------------------------------------------- |
| `removeOxidizer(IIngredient oxidizer)` | Forefully remove the oxidizer from the affected MixRecipe |
| `removeReducer(IIngredient reducer)`   | Forefully remove the reducer from the affected MixRecipe  |
| `removePurifier(IIngredient reducer)`  | Forefully remove the purifier from the affected MixRecipe |


All those methods return the same instance they were called one, allowing method chaining.

## Adding additives to existing MixRecipe

You can add additives to all mix recipe matched by the `MixRecipeManager`. Be careful, as removals have priority (see above).

| Method                                                          | Info                                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| `addOxidizer(@NotNull IIngredient oxidizer, int consumeChance)` | Add the oxidizer with the specified consume chance (in percent) |
| `addReducer(@NotNull IIngredient reducer, int consumeChance)`   | Add the reducer with the specified consume chance (in percent)  |
| `addPurifier(@NotNull IIngredient purifier, int consumeChance)` | Add the purifier with the specified consume chance (in percent) |


All those methods return the same instance they were called one, allowing method chaining.

## Warning

Creating a `MixRecipeManager` that does not match any mix recipes will not trigger any warning, because there's no way to tell which mix recipes will be added (script parsing happens before mix recipe registration). If you're `MixRecipeManager` has no effect, first check it it actually matches a mix recipe