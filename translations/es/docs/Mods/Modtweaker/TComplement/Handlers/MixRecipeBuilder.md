# MixRecipeBuilder

A `MixRecipeBuilder` is used to build and add High Oven's Mix Recipe to the game.

## Importing the package

Better be safe than sorry and import the package

```zenscript
import mods.tcomplement.highoven.MixRecipeBuilder;
```

## Getting a `MixRecipeBuilder`

The `mods.tcomplement.highoven.HighOven` handler can give you a `MixRecipeBuilder`

```zenscript
// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `output` is the fluid and quantity to produce
+ `input` is the fluid and quantity to consume
+ `temp` is the minimal temperature of the high oven for the recipe to work, in Kelvin

## Attributes

| Attribute   | ZenGetter   | ZenSetter            | Type                      | Info                                                                     |
| ----------- | ----------- | -------------------- | ------------------------- | ------------------------------------------------------------------------ |
| output      | `output`    | :heavy_check_mark: | `ILiquidStack`            | the output produced by the MixRecipe                                     |
| input       | `input`     | :heavy_check_mark: | `ILiquidStack`            | the input of the MixRecipe                                               |
| temperature | `temp`      | :heavy_check_mark: | `int`                     | the minimum temperature, in Kelvin                                       |
| oxidizers   | `oxidizers` | :x:                  | `List<IIngredient>` | the valid oxidizers for the recipe at the time the attribute is accessed |
| reducers    | `reducers`  | :x:                  | `List<IIngredient>` | the valid reducers for the recipe at the time the attribute is accessed  |
| purifiers   | `purifiers` | :x:                  | `List<IIngredient>` | the valid purifiers for the recipe at the time the attribute is accessed |


## Methods

| Method                                                 | Return type        | Info                                                                                      |
| ------------------------------------------------------ | ------------------ | ----------------------------------------------------------------------------------------- |
| `getOxidizerChance(IIngredient oxidizer)`              | `int`              | The chance in percent that the oxidizer is consumed, or `-1` if the oxidizer is not valid |
| `getReducerChance(IIngredient reducer)`                | `int`              | The chance in percent that the reducer is consumed, or `-1` if the reducer is not valid   |
| `getOxidizerChance(IIngredient purifier)`              | `int`              | The chance in percent that the purifier is consumed, or `-1` if the oxidizer is not valid |
| `addOxidizer(IIngredient oxidizer, int consumeChance)` | `MixRecipeBuilder` | Add the oxidizer with the given consume chance (in percent)                               |
| `addReducer(IIngredient reducer, int consumeChance)`   | `MixRecipeBuilder` | Add the reducer with the given consume chance (in percent)                                |
| `addPurifier(IIngredient purifier, int consumeChance)` | `MixRecipeBuilder` | Add the purifier with the given consume chance (in percent)                               |
| `removeOxidizer(IIngredient oxidizer)`                 | `MixRecipeBuilder` | Remove the oxidizer if it had been added                                                  |
| `removeReducer(IIngredient reducer)`                   | `MixRecipeBuilder` | Remove the reducer if it had been added                                                   |
| `removePurifier(IIngredient purifier)`                 | `MixRecipeBuilder` | Remove the purifier if it had been added                                                  |
| `removeAllOxidizer()`                                  | `MixRecipeBuilder` | Remove all oxidizers                                                                      |
| `removeAllReducer()`                                   | `MixRecipeBuilder` | Remove all reducers                                                                       |
| `removeAllPurifier()`                                  | `MixRecipeBuilder` | Remove all purifiers                                                                      |
| `register()`                                           |                    | Add a new MixRecipe with the data currently added in the MixRecipeBuilder                 |


All methods that return a `MixRecipeBuilder` return the same instance they were called on, allowing method chaining.

## How to use Once you have a `MixRecipeBuilder`, add the oxidizers, reducers and purifiers for your new recipe to the builder, then `register()` a recipe. A `MixRecipeBuilder` can be used to register as many recipes as you want: each time you call `register()`, it adds a new recipe with the infos it has at the time you call the function. This makes it easy to add recipes variant or recipes tier by incrementally adding new additives and/or increasing yield etc.

The additives supports all kind of `IIngredient`: `IOreDictEntry`, `IItemStack` and their transformations, liquid containers etc.

## Warning Don't forget to **register** your recipe, the `MixRecipeBuilder` is just a builder to specify all the parts of the recipe !