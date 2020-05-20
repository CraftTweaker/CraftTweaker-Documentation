# Crafting Table

## Recipe Types

There are three recipe types for crafting tables:

- **Shapeless:** A shapeless recipe is a recipe where the position of the input items in the crafting grid does not matter.
- **Shaped:** A shaped recipe is a recipe where the position of the items must be exact.
- **Shaped Mirrored:** A mirrored recipe is like shaped recipes but mirrors the recipe along the horizontal or vertical axes.

## Adding a Recipe

_When adding a recipe, ensure that your recipe names are unique!_

### Adding Shapeless Recipes

`craftingTable.addShapeless(recipeName, output, ingredients, recipeFunction);`

- `recipeName` \<string>
- `output` <[IItemStack]()>
- `ingredients` <[IIngredient]()[]>
- `recipeFunction` (Optional) <[RecipeFunctionArray]()>

Adds a [shapeless](#recipe-types) recipe to the crafting table. As [shapeless](#recipe-types) recipes ignore the position of the input items, the ordering of the items when creating the recipe does not matter either.

[Shapeless](#recipe-types) recipes can have up to 9 inputs, but those with 4 or less inputs can also be crafted in the 2x2 inventory grid.

```zenscript
craftingTable.addShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// A shapeless recipe can have up to 9 inputs
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_See [Using Recipe Functions](#using-recipe-functions) for examples on how to use recipe functions._

### Adding Shaped and Shaped Mirrored Recipes

`craftingTable.addShaped(recipeName, output, ingredients, recipeFunction);`

`craftingTable.addShapedMirrored(recipeName, output, ingredients, recipeFunction);`

- `recipeName` \<string>
- `output` <[IItemStack]()>
- `ingredients` <[IIngredient]()[][]>
- `recipeFunction` (Optional) <[RecipeFunctionMatrix]()>

Adds a [shaped](#recipe-types) (or [mirrored](#recipe-types), depending on the function) recipe to the crafting table. The ordering of the items when creating the recipe dictates the position of each item in the crafting grid.

Making the recipe a [shaped mirrored](#recipe-types) recipe instead allows for more flexibility to the player when adding the items to the crafting grid.

Both [shaped](#recipe-types) and [shaped mirrored](#recipe-types) recipes can be made to work in a 2x2 (inventory) or 3x3 crafting grid.

```zenscript
// Adding a shaped recipe
craftingTable.addShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Adding a shaped 2x2 recipe (this can also be done as mirrored)
craftingTable.addShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Adding a shaped mirrored recipe
craftingTable.addShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_See [Using Recipe Functions](#using-recipe-functions) for examples on how to use recipe functions._

## Using Recipe Functions

A recipe function allows for a programatically determined output. This can be especially useful when you need some of the input item's information, like the item's damage or other NBT data.

_As Shaped and Shaped Mirrored Recipes are similar, examples will only include Shaped Recipes. You may treat any example using `addShaped` as the same as using `addShapedMirrored`._

### Using RecipeFunctionArray in a Shapeless Recipe

`recipeFunction` <[RecipeFunctionArray]()>

`(usualOut as IItemStack, inputs as IItemStack[]) => {};`

- `usualOut` <[IItemStack]()>
- `inputs` <[IItemStack]()[]> Array of inputs ordered the same as defined in the original recipe

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut as IItemStack, inputs as IItemStack[]) => {
    // Checks if <item:minecraft:dirt> has a display name of "totally real diamond block"
    if (inputs[0].displayName == "totally real diamond block") {
        // Returns <item:minecraft:diamond> * 9
        return usualOut;
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond"
    return <item:minecraft:clay>.setDisplayName("Diamond");
});
```

### Using RecipeFunctionMatrix in a Shaped/Mirrored Recipe

`recipeFunction` <[RecipeFunctionMatrix]()>

`(usualOut as IItemStack, inputs as IItemStack[][]) => {};`

- `usualOut` <[IItemStack]()>
- `inputs` <[IItemStack]()[][]> Array of inputs ordered the same as defined in the original recipe. An input can be found by defining the row, then the column (`inputs[0][1]` to get the item in the first row, second column).

```zenscript

```

### Advanced Usage

Recipe functions can also be defined as a named function which enables you to utilize the same function in multiple recipes easily:

#### Functions as a Variable

Alternatively, you can also assign the anonymous function to a variable.

Shapeless:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapelessRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(inputs[0].displayName == "totally real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>.setDisplayName("Diamond");
};

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:dirt>
craftingTable.addShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:cobblestone>
craftingTable.addShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Shaped/Mirrored:

```zenscript

```

## Removing a Recipe

### Remove a Recipe by Name

`craftingTable.removeByName(recipeName);`

- `recipeName` \<string>

Removes the recipe that matches the name provided.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Remove Recipes by Output

`craftingTable.removeRecipe(output);`

- `output` <[IItemStack]()>

Removes all recipes where the output result is the provided [IItemStack]().

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Remove Recipes by Mod ID

`craftingTable.removeByModid(modId);`

- `modId` \<string>

Removes all recipes added by the provided mod.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Exclude Recipes From Mod ID Removal

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` \<string>
- `exclusionFilter` <[RecipeFilter](/vanilla/api/recipe/RecipeFilter)>
  - `name` \<string> The name of the current recipe being checked. _The mod id will not be included_

Removes all recipes added by the provided mod. Recipes are excluded if the result of the exclusionFilter returns true for the recipe name.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Checks if the name of the recipe matches "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

Multiple recipes can also be excluded. One way this can be done is as follows:

```zenscript
// An array of recipe names as strings
var minecraftExclusions as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### Remove Recipes by Regex

`craftingTable.removeByRegex(regex);`

- `regex` \<string>

Removes all recipes that's name matches the regex string.

```zenscript
// Removes recipes such as "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", and "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Remove All Recipes

`craftingTable.removeAll();`

Removes all crafting table recipes.

```zenscript
craftingTable.removeAll();
```
