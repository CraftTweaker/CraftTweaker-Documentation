::requiredMod[Atum 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/atum}

# Kiln

The Kiln is a multiblock used for quickly processing building blocks, that can be acquired through smelting something in a furnace.

## Blacklist

The Kiln recipes are based on the vanilla Furnaces recipes, sorting out everything besides building blocks. The blacklist is a way for you to further minimize what recipes are grabbed from the vanilla Furnace.

`<recipetype:atum:kiln>.blacklist(id);`

- `id` A namespaced ID for the input block/item that should be blacklisted.

Removes the recipe(s) with the specified item/block from the recipes the Kiln will pull from the vanilla Furnace

```zenscript
<recipetype:atum:kiln>.blacklist("minecraft:cobblestone");
```

## Adding a Recipe

`<recipetype:atum:kiln>.addRecipe(input, output, experience, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `experience` Float number
- `cookTime` Integer number (If left empty, it'll default to 75)

Adds a recipe with the specified input, output, experience & cook time

```zenscript
<recipetype:atum:kiln>.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Removing a Recipe

The removal methods only work for recipes added specifically for the Kiln by Atum (Or other mods) By default in Atum this will only be the Marl to White Ceramic Tile Block recipe. If you wish to remove something else, you're probably looking for the blacklist (Documentation above)

### Remove Recipes by Output

`<recipetype:atum:kiln>.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Removes all recipes where the output result is the provided [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
<recipetype:atum:kiln>.removeRecipeByOutput(<item:atum:marl>);
```

### Remove Recipes by Output & Input

`<recipetype:atum:kiln>.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Removes the specific recipe, with the specified output & input

```zenscript
<recipetype:atum:kiln>.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Spinning Wheel recipes
