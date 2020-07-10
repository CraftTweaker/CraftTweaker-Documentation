# Kiln

The Kiln is a multiblock that it used for quickly processing building blocks that can be acquired through smelting something in a furnace

## Package
`import mods.atum.Kiln;`

## Blacklist

As the Kiln grabs most of its recipes from the vanilla Furnace, the blacklist is a way for you to sort out the recipes you don't want

`mods.atum.Kiln.blacklist(id);`

- `id` <The ID for the input of block/item that should be blacklisted>

Removes the recipe(s) with the specified item/block from the recipes the Kiln will pull from the vanilla Furnace

```zenscript
mods.atum.Kiln.blacklist(<item:minecraft:cobblestone>);
```

## Adding a Recipe

`mods.atum.Kiln.addRecipe(input, output, experience, cookTime <optional>);`

- `input` <[IItemStack](/vanilla/api/items/IItemStack)>
- `output` <[IItemStack](/vanilla/api/items/IItemStack)>
- `experience` <Float number>
- `cookTime` <Integer number> (If left empty, it'll default to 75)

Adds a recipe with the specified input, output, experience & cook time

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Removing a Recipe

The removal methods only work for recipes added specifically for the Kiln by Atum (Or other mods)
By default in Atum this will only be the Marl to White Ceramic Tile Block recipe. 
If you wish to remove something else, you're probably looking for the blacklist (Documentation above)

### Remove Recipes by Output

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` <[IItemStack](/vanilla/api/items/IItemStack)>

Removes all recipes where the output result is the provided [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Remove Recipes by Output & Input

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` <[IItemStack](/vanilla/api/items/IItemStack)>
- `input` <[IItemStack](/vanilla/api/items/IItemStack)>

Removes the specific recipe, with the specified output & input

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Spinning Wheel recipes
