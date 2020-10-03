### Class

```zenscript
import mods.roots.Pyre;
```

#### Methods

```zenscript
void addRecipe(
  string name,         // the name of the recipe being added; if replacing an existing game recipe, ensure the correct name is used
  IItemStack output,   // the output of this recipe
  IIngredient[] inputs // a list of five ingredients (no more, no less)
);
```

* * *

```zenscript
void addRecipe(
  string name,          // the name of the recipe being added; if replacing an existing game recipe, ensure the correct name is used
  IItemStack output,    // the output of this recipe
  IIngredient[] inputs, // a list of five ingredients
  int xp                // the amount of xp in levels that is granted after crafting
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // the output of the recipe to remove
);
```

* * *

### Examples

```zenscript
import mods.roots.Pyre;

// Removes the recipe for stalicripe; note that the quantity is not considered
// when checking if the recipe matches.
Pyre.removeRecipe(<roots:stalicripe>);

// Re-adds the stalicripe using an addition recipe that grants no XP,
// but with considerably greater output
Pyre.addRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// As above, but rewarding 30 levels of experience (calculated from level 0)
Pyre.addRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Notes

It's extremely important when replacing recipes to ensure that the recipe name is the same to make certain that Patchouli correctly reports the correct recipe for crafting base items.

For all other items, please use a name descriptive of what your recipe does.