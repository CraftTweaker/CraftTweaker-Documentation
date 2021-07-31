# Kiln

The Kiln is a multiblock used for quickly processing building blocks, that can be acquired through smelting something in a furnace.

## Package
`mods.atum.Kiln;`

## Blacklist

The Kiln recipes are based on the vanilla Furnaces recipes, sorting out everything besides building blocks. The blacklist is a way for you to further minimize what recipes are grabbed from the vanilla Furnace.

`mods.atum.Kiln.blacklist(id);`

- `id` A namespaced ID for the input block/item that should be blacklisted.

Removes the recipe(s) with the specified item/block from the recipes the Kiln will pull from the vanilla Furnace

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Tarif Ekleme

`mods.atum.Kiln.addRecipe(input, output, experience, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `experience` Float number
- `cookTime` Integer number (If left empty, it'll default to 75)

Adds a recipe with the specified input, output, experience & cook time

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Bir Tarifi Kaldırma

The removal methods only work for recipes added specifically for the Kiln by Atum (Or other mods) By default in Atum this will only be the Marl to White Ceramic Tile Block recipe. If you wish to remove something else, you're probably looking for the blacklist (Documentation above)

### Çıkışa göre Tarif Kaldırma

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Girilen [IItemStack](/vanilla/api/items/IItemStack) çıktısının olduğu bütün tarifleri kaldırır.

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Remove Recipes by Output & Input

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Removes the specific recipe, with the specified output & input

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Spinning Wheel recipes
