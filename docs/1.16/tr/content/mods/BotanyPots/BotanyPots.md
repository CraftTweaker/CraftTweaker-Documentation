# [BotanyPots](https://www.curseforge.com/minecraft/mc-mods/botany-pots)

## Description
This mod adds pots that can be used to grow various types of plants. Through CraftTweaker you can add/remove crops and soil types. You can also edit the properties of the existing content.

## Crops
Crops can be modified using the crop manager. To do this you will need to import the following into your script.

```zenscript
import mods.botanypots.ZenCrop;
val crops = <recipetype:botanypots:crop>;
```

### Creating Crops
To create a crop you use the create method from the manager. This method will return a ZenCrop value which you can use to do further changes.

```zenscript
// Simple crop entry
// crops.create(id, seedInput, renderBlock, growthTicks, soilCategory);
val goldCrop = crops.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, "dirt");

// Crop with multiple render blocks and multiple soil categories.
// crops.create(id, seedInput, renderBlockArray, growthTicks, soilCategoryArray);
val ironCrop = crops.create("examplepack:iron", <item:minecraft:iron_nugget>, [<blockstate:minecraft:iron_block>, <blockstate:minecraft:iron_ore>], 3000, ["dirt", "nether"]);
```

This crop will have no drops. You need to add some for the crop to work properly. Information about this is in the next section.

### Modifying Crops
To modify a crop you will need to get a ZenCrop value. This is provided when you create the crop but can also be retrieved using `crops.getCrop("cropid");`.

```zenscript
val wheat = crops.getCrop("botanypots:crops/wheat");

// Adds a soil category.
wheat.addCategory("soil_category_name");

// Removes a soil category.
wheat.removeCategory("dirt");

// Removes all soil categories.
wheat.clearCategories();

// Adding new drop entries.
// addDrop(item, chance);
wheat.addDrop(<item:minecraft:gold_nugget>, 1); // 100% drop rate
wheat.addDrop(<item:minecraft:gold_ingot>, 0.75); // 75% drop rate

// addDrop(item, chance, rolls);
wheat.addDrop(<item:minecraft:iron_nugget>, 1, 4); // 100% drop rate AND 4 attempts.

// addDrop(item, chance, minRolls, maxRolls);
wheat.addDrop(<item:minecraft:iron_ingot>, 0.75, 1, 5); // 75% drop rate AND 1 to 5 attempts.

// Removes all drops.
wheat.clearDrops();

// Removes a drop.
// removeDrop(ingredientToRemove);
wheat.removeDrop(<tag:forge:seeds>);

// Set the growth ticks of the crop.
wheat.setGrowthTicks(10000);

// Sets the seed item.
wheat.setSeed(<tag:forge:seeds/wheat>);

// Sets the display block.
wheat.setDisplay(<blockstate:minecraft:gold_block>);

// Sets the display to multiple blocks stacked.
wheat.setDisplay([<blockstate:minecraft:iron_block>, <blockstate:minecraft:iron_ore>]);
```

## Soils
Soils can be modified using the soil manager. To do this you will need to import the following into your script.

```zenscript
import mods.botanypots.ZenSoil;
val soils = <recipetype:botanypots:soil>;
```

### Creating Soils
To create a soil you use the create method from the manager. This method will return a ZenSoil value which you can use to do further changes.

```zenscript
// soils.create(id, input, renderBlock, growthModifier, category);
// Growth can be any value less than or equal to 1. Higher = faster, 0 = no change.
// category may also be a string array.
val stoneSoil = soils.create("examplepack:stone", <tag:forge:stone>, <blockstate:minecraft:stone>, 0.15, "stone");
```

### Modifying Soils
To modify a crop you will need to get a ZenSoil value. This is provided when you create the soil but can also be retrieved using `soils.getSoil("soilid");`.

```zenscript
val dirt = soils.getSoil("botanypots:soils/dirt");

// Adds a category.
// addCategory(category);
dirt.addCategory("test");

// Removes a category.
// removeCategory(category);
dirt.removeCategory("dirt");

// Removes all categories.
// clearCategories();
dirt.clearCategories();

// Sets the input.
// setInput(input);
dirt.setInput(<tag:forge:stone>);

// Set display block.
// setDisplay(state);
dirt.setDisplay(<blockstate:minecraft:stone>);

// Set growth modifier.
// setGrowthModifier(modifier);
dirt.setGrowthModifier(0.20);
```

## Fertilizers
Fertilizers can be modified using the fertilizer manager. To do this you will need to import the following into your script.

```zenscript
import mods.botanypots.ZenFertilizer;
val fertilizers = <recipetype:botanypots:fertilizer>;
```

### Creating Fertilizers
To create a fertilizer you use the create method from the manager. This method will return a ZenFertilizer value which you can use to do further changes.

```zenscript
// fertilizers.create(id, input, ticks);
// fertilizers.create(id, input, minTicks, maxTicks);
val stickFertilizer = fertilizers.create("examplepack:test", <item:minecraft:stick>, 1000);
```

### Modifying Fertilizers
To modify a fertilizer you will need to get a ZenFertilizer value. This is provided when you create the fertilizer but can also be retrieved using `fertilizers.getFertilizer("fertilizerId");`.

```zenscript
val bonemeal = soils.getFertilizer("botanypots:fertilizers/bone_meal");

// Set the input of the fertilizer.
// setInput(input);
bonemeal.setInput(<item:minecraft:stick>);

// Sets the growth tick amount.
// setGrowthAmount(ticks);
// setGrowthAmount(min, max);

bonemal.setGrowthAmoun(1200, 1500);
```
