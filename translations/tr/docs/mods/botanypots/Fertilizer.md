# Fertilizers

Class path: `mods.botanypots.Fertilizer`

## Use

To use, import the class with `import mods.botanypots.Fertilizer;` at the beginning of your script.

## Creating Fertilizers

`Fertilizer.create(id, ingredient, minTick, maxTick);`

- `id` &lt;string> The id of the new fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> The item used for the fertilizer.
- `minTick` &lt;int> The minimum amount of ticks added by the fertilizer.
- `maxTick` &lt;int> The maximum amount of ticks added by the fertilizer.

Creates a new fertilizer. These can be used to grow crops faster.

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Removing Fertilizers

`Fertilizer.remove(id);`

- `id` &lt;string> The id of the fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.

This can be used to remove a fertilizer.

```zenscript
Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## Changing Fertilizer Ticks

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> The id of the fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.
- `minTick` &lt;int> The new minimum amount of ticks added by the fertilizer.
- `maxTick` &lt;int> The new maximum amount of ticks added by the fertilizer.

This will change the growth tick range added by the fertilizer.

```zenscript
Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## Changing Fertilizer Ingredients

`Fertilizer.setIngredient(id, ingredient);`

- `id` &lt;string> The id of the fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> The new item to be used for the fertilizer.

Sets the ingredient item that is the fertilizer.

```zenscript
Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## Getting All Ids

`Fertilizer.getAllIds();`

- Returns: &lt;string[]> An array of all known fertilizer ids at the time this is ran.

This will give you an array of all the known fertilizer ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Removing All Fertilizers

This will completely remove all the fertilizers currently registered. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Fertilizer.removeAll();
```