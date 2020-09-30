# Soils

Class path: `mods.botanypots.Soil`

## Use

To use, import the class with `import mods.botanypots.Soil;` at the beginning of your script.

## Creating New Soils

`Soil.create(id, ingredient, displayState, tickRate, categories);`

- `id` &lt;string> The id of the new soil. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> The ingredient used to determine which items/blocks are used to put the soil in a pot.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> The block state to display for the soil in the pot.
- `growthModifier` &lt;float> Modifies the time a crop takes to grow. 1f = instant growth. 0 = normal growth. -1f = never grows. 0.15 = 15% faster, -0.15 = 15% slower.
- `categories` &lt;string[]> An array of categories associated with the new soil.

Creates a new soil entry that players can use in the botany pot.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 0, ["rocky"]);
```

## Removing A Soil

`Soil.remove(id);`

- `id` &lt;string> The id of the soil to remove. This is a namespaced id an must be in the valid `namespace:path` format.

Removes a soil from the game's data.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Changing Soil Growth Modifier

`Soil.setGrowthModifier(id, tickRate);`

- `id` &lt;string> The id of the soil. This is a namespaced id an must be in the valid `namespace:path` format.
- `growthModifier` &lt;float> Modifies the time a crop takes to grow. 1f = instant growth. 0 = normal growth. -1f = never grows. 0.15 = 15% faster, -0.15 = 15% slower.

Changes the growth modifier of a given soil.

```zenscript
Soil.setGrowthModifier("botanypots:soil/grass", 0.15);
```

## Changing Soil Ingredient

`Soil.setIngredient(id, ingredient);`

- `id` &lt;string> The id of the soil. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> The ingredient used to determine which items/blocks are used to put the soil in a pot.

Changes the items used to put the soil into the botany pot.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Changing Soil Display

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> The id of the soil. This is a namespaced id an must be in the valid `namespace:path` format.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> The block state to display for the soil in the pot.

Changes the block displayed for the soil.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Changing Soil Categories

Changes the categories associated with the soil. These are used to match crops to valid soils.

### Add a Category to a Soil

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> The id of the soil. This is a namespaced id an must be in the valid `namespace:path` format.
- `categoriesToAdd` &lt;string[]> An array of categories to associate with the soil.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### Remove a Category From a Soil

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> The id of the soil. This is a namespaced id an must be in the valid `namespace:path` format.
- `categoriesToRemove` &lt;string[]> An array of categories to dissociate with the soil.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Clear All Categories From a Soil

`Soil.clearCategories(id);`

- `id` &lt;string> The id of the soil. This is a namespaced id an must be in the valid `namespace:path` format.

```zenscript
Soil.clearCategories("botanypots:soil/farmland");
```

## Getting All Ids

`Soil.getAllIds();`

- Returns: &lt;string[]> An array of all known soil ids at the time this is ran.

This will give you an array of all the known soil ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## Removing All Soil

This will completely remove all the soils currently registered. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Soil.removeAll();
```
