# Quern

## Package
`mods.atum.Quern;`

## Adding a Recipe

`mods.atum.Quern.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Any number above 0

Adds a recipe with the specified input & output, that takes the specified rotations to complete querning

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Removing a Recipe

### Remove Recipes by Output

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Removes all recipes where the output result is the provided [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Remove Recipes by Output & Input

`mods.atum.Quern.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Removes the specific recipe, with the specified output & input

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Quern recipes
