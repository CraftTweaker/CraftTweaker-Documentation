# HighOven

The HighOven package allows to add/remove fuels, heat recipes and mix recipes to the highoven.

## Importing the package

Import the package using `import mods.tcomplement.highoven.HighOven;`


## Fuels
You can add and remove fuels accepted by the high oven.

### Removing fuels
```
// HighOven.removeFuel(IItemStack fuel);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Adding fuels
```
// HighOven.addFuel(IIngredient fuel, int time, int rate);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `fuel` is the fuel to add (supports transformers, NBT and fluid containers)
+ `time` is how long it last, in seconds
+ `rate` is the temperature increase of the high oven when that fuel is used, in degrees per second

## Heat recipes
Heat recipes transform a fluid into another in the high oven tank, provided the temperature of the high oven is high enought.

### Removing heat recipes
```
// HighOven.removeHeatRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `output` is the output for which recipes should be disabled
+ `input` is optionally the inputs to filter recipe with. If unspecified (or `null`), all recipes producing the supplied output will be disabled. Otherwise, only the recipe with the given input is disabled.

*NOTE*: this method does **not** disable heat recipes added by ModTweaker using the next method.

### Adding heat recipes
```
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```
+ `output` the liquid to pruduce, and in which quantity
+ `input` the liquid to consume, and in which quantity to produce the output quantity
+ `temp` the minimum temperature, in Kelvin.

*Note*: the actual rate of the heat recipes scales with the excess temperature

## Mix recipes
Mix recipes allows to do some kind of alchemy or alloying. When a stacl melt in the high oven, if it produces the right fluid *and* the proper oxidizers, reducers and purifiers are in their dedicated slots, then a different fluid is produced.

Since those recipes are complicated, adding or tweaking existing ones uses a special zen class.

### Removing mix recipes
This is the easy part for mix recipes
```
// HighOven.removeMixRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeMixRecipe(<liquid:steel>); // disable any steel-producing mix recipe
```
The arguments are the same as `removeHeatRecipe()` and the matching works the same way. Similarly to `removeHeatRecipe()`, this method will not remove recipes added by ModTweaker.

### Adding mix recipes
To add a mix recipe, you have to use a `MixRecipeBuilder`. You can get one using
```
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```
+ `output` is the fluid and quantity to produce
+ `input` is the fluid and quantity to consume
+ `temp` is the minimal temperature of the high oven for the recipe to work, in Kelvin

Once you have a `MixRecipeBuilder`, you should add oxidizers, reducers and purifiers to it, and then register it.

```
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

For a detail documentation of what you can do with a `MixRecipeBuilder`, see it's entry.
*NOTE*: Once you have used a `MixRecipeBuilder`, you can keep modifying it and re-using it. It allows for recipe variations to be easily added.

**WARNING**: if you add mix recipe for input fluids where *no* item melting produces that fluid, those recipe won't be visible in JEI.

### Tweaking mix recipe
To change existing mix recipes (**including** those added by ModTweaker), you can use a `MixRecipeManager`:
```
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

As usual, not specifying the input (or providing `null`) result in a wildcard behavior where all input will be accepted.

Once you have a `MixRecipeManager` representing a particular set of mix recipe, you can prevent certain oxidizer/reducers/purifiers from being added to those recipes, *or* try to add new additives.

You must then register your manager.
```
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
manager.register();
```

*NOTE*: once you have registered your manager, you must not re-use it.
