
### Class

```zenscript
import mods.roots.Mortar;
```

#### Methods

```zenscript
void addRecipe(
  string name,         // the name of this recipe, should match a recipe being replaced
  IItemStack output,   // the item output of this recipe
  IIngredient[] inputs // an array of ingredients that is either 5 long or 1 long
);
```

Creates a recipe to create output from an array of ingredients (allows transformations). If the array is 5 long, a single recipe will be produced. If the array consists of only one ingredient, 5 separate recipes will be produced, with the output adjusted every time to compensate.

---


```zenscript
void changeSpell(
  string spellName,    // the name of the spell as in the spell registry
  IIngredient[] inputs // an array of 5 items that are the new ingredients for the recipe
);
```

Allows the modification of the recipe for a Spell using the specified array of 5 ingredients (allows for transformations).

---


```zenscript
void removeRecipe(
  IItemStack output // the item stack produced by the recipe
);
```

Removes a Mortar Recipe based on output. Compares output to existing recipes without regard for size, meaning that matching recipes with 1-5 inputs and 1-5x outputs will all be removed.

---


### Examples

```zenscript
import mods.roots.Mortar;

// Adds a recipe that makes gunpowder out of flint
// As the recipe only has one input, it will automatically
// generate 5 recipes, increasing the number of inputs and
// the quantity of the output respectively.
Mortar.addRecipe("gunpowder_from_flint", <minecraft:gunpowder>, [<minecraft:flint>]);

// This recipe uses five ingredients to create one bed.
Mortar.addRecipe("bed_from_wool_planks", <minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

Mortar.addRecipe("charred_planks_from_transformed_flint_and_steel", <mysticalworld:charred_planks>*4, [<minecraft:flint_and_steel>.anyDamage().transformDamage(1), <ore:plankWood>, <ore:plankWood>, <ore:plankWood>, <ore:plankWood>]);

// This will remove all recipes that have Root's flour as an output
// including any multi-ingredient recipes
Mortar.removeRecipe(<roots:flour>);

// This will change the recipe for the Harvest to
// simply require five pieces of sugar.
Mortar.changeSpell("spell_harvest", [<minecraft:flint_and_steel>.anyDamage().transformDamage(1), <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```
