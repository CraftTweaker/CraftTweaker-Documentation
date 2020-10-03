# HighOven

The HighOven package allows to add/remove fuels, heat recipes and mix recipes to the high oven.

## Importing the package

Import the package using

```zenscript
import mods.tcomplement.highoven.HighOven;
```

## Fuels

You can add and remove fuels accepted by the high oven.

### Removing fuels

```zenscript
// HighOven.removeFuel(IIngredient fuel);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Adding fuels

```zenscript
// HighOven.addFuel(IIngredient fuel, int time, int rate);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `fuel` is the fuel to add (supports transformers, NBT and fluid containers)
+ `time` is how long the fuel lasts, in seconds
+ `rate` is the temperature increase of the high oven when that fuel is used, in degrees per second

## Melting Overrides

You can add and remove melting overrides for the High Oven. Melting overrides, well, override the default melting behavior in the High Oven. Items normally behave the same as in the smeltery, overrides can redefine output fluid and melting temperature (only for the High Oven).

### Removing overrides

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack output, @Optional IItemStack input)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### Adding overrides

This is more interesting. Overrides specify a new behavior for items in the High Oven

```zenscript
// HighOven.addMeltingOverride(ILiquidStack output, IIngredient input, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `output` the liquid and amount to produce
+ `input` the IIngredient to smelt. Supports transformers, oredict etc.
+ `temp` (Optional) the minimum temperature for the item to start melting in the High Oven, in Kelvin. If undefined, leave the calculation to the High Oven

## Heat recipes

Heat recipes transform a fluid into another in the high oven tank, provided the temperature of the high oven is high enough.

### Removing heat recipes

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `output` is the output for which recipes should be disabled
+ `input` is optionally the inputs to filter recipes with. If unspecified (or `null`), all recipes producing the supplied output will be disabled. Otherwise, only the recipe with the given input is disabled.

*NOTE*: this method does **not** disable heat recipes added by ModTweaker using the next method.

### Adding heat recipes

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `output` the liquid to pruduce, and in which quantity
+ `input` the liquid to consume, and in which quantity, to produce the output quantity
+ `temp` the minimum high oven's temperature, in Kelvin.

*Note*: the actual rate of the heat recipes scales with excess temperature

## Mix recipes

Mix recipes allow to do a kind of alchemy or alloying. When a stack melts in the high oven, if it produces the right fluid *and* the proper oxidizers, reducers and purifiers are in their dedicated slots, then a different fluid is produced.

Since those recipes are complicated, adding or tweaking existing ones uses a special zen class.

### Removing mix recipes

This is the easy part for mix recipes

```zenscript
// HighOven.removeMixRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeMixRecipe(<liquid:steel>); // disable any steel-producing mix recipe
```

The arguments are the same as `removeHeatRecipe()` and the matching works the same way. Similarly to `removeHeatRecipe()`, this method will not remove recipes added by ModTweaker.

### Adding mix recipes

To add a mix recipe, you have to use a `MixRecipeBuilder`. You can get one using

```zenscript
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `output` is the fluid and quantity to produce
+ `input` is the fluid and quantity to consume
+ `temp` is the minimal temperature of the high oven for the recipe to work, in Kelvin

Once you have a `MixRecipeBuilder`, you should add oxidizers, reducers and purifiers to it, and then register it.

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

For a detailed documentation of what you can do with a `MixRecipeBuilder`, see its documentation.

NOTE*: Once you have used a `MixRecipeBuilder`, you can keep modifying it and re-using it. It allows for recipe variations to be easily added.

**WARNING**: If no item produces the input fluid when it melts in the smeltery, then the recipe won't be visible in JEI.

### Tweaking mix recipe

To change existing mix recipes (**including** those added by ModTweaker), you can use a `MixRecipeManager`:

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

As usual, not specifying the input (or providing `null`) result in a wildcard behavior where all input will be accepted.

Once you have a `MixRecipeManager` representing a particular set of mix recipe, you can prevent certain oxidizer/reducers/purifiers from being added to those recipes, *or* try to add new additives. Removals have priority on additions.

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

The behavior might be a little surpring at times. When you disable an additive, any additive addition that would allow what you disable will be canceled. For instance, if you add a bunch of items using a single `OreDictEntry`, then try to remove a specific `IItemStack`, it will prevent the entry from being added.

This is because iternally, `OreDictEntry` are added as-is and are not converted to individual items. The only way to disable the `ItemStack` you want to forbid is to prevent the whole entry from being registered, otherwise the entry would allow the item.

If you actually want to do add an oredict entry except some items, you'll have to do it manually by iterating on the `OreDictEntry` content and then removing the specific items (or by not adding them in the first place).