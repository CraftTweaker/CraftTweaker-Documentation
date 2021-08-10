::requiredMod[Create Automated]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/create-automated}

# Extracting

`maxOre` is optional. If not provided, `minOre` will be used which will create a recipe always giving the same amount of ore.

## Creating a recipe using the progress builder

The progress builder makes your code more readable, with a builder that actually makes sense instead of some big number.

### Using the builder

The builder has a `.build()` method that converts it into an integer, 
however in an extracting recipe most of the time there is an option for both an integer and the builder itself, so it doesn't matter.

```zenscript
import mods.createautomated.RequiredProgress;

// The builder's default speed is 128, so you don't have to specify that
new RequiredProgress().takesSeconds(32).build(); // = 81920 (128 * 32 * 20)

// But if you want, you can do this
new RequiredProgress().atSpeedOf(32).takesSeconds(2).build(); // 1280 (32 * 2 *20)
```

Time methods: `takesTicks`, `takesSeconds`, `takesMinutes`.

### Creating a recipe with it:

```zenscript
import mods.createautomated.RequiredProgress;

// <recipetype:createautomated:extracting>.addRecipe(String name, IIngredient node, IItemStack output, int drillDamage, RequiredProgress requiredProgress, int minOre, @Optional(minOre) int maxOre)

// Creates an extracting recipe that lets you extract between 2 and 4 diamonds in 2 seconds at 128 RPM, dealing 3 drill damage
<recipetype:createautomated:extracting>.addRecipe("diamonds_from_cobble", <item:minecraft:cobblestone>, <item:minecraft:diamond>, 3, 
    new RequiredProgress().atSpeedOf(128).takesSeconds(2), 2, 4
);
```

## Creating a recipe using a raw requiredProgress integer
Using an integer for "requiredProgress". Every tick an extractor adds the current speed to its progress, so this should be 
```speed * ticks```. 128 is the standard speed for these, so you should use it.
```zenscript
// <recipetype:createautomated:extracting>.addRecipe(String name, IIngredient node, IItemStack output, int drillDamage, int requiredProgress, int minOre, @Optional(minOre) int maxOre)

// Creates an extracting recipe that lets you extract between 2 and 4 diamonds in 40 ticks (2 seconds) at 128 RPM, dealing 3 drill damage
<recipetype:createautomated:extracting>.addRecipe("diamonds_from_cobble", <item:minecraft:cobblestone>, <item:minecraft:diamond>, 3, 128 * 40, 2, 4);
```
