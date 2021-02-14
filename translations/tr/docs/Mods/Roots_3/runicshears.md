### Class

```zenscript
import mods.roots.RunicShears;
```

#### Methods

```zenscript
void addRecipe(
  string name,                 // the name of the recipe being created
  IItemStack outputDrop,       // the item output obtained by performing the shearing
  IItemStack replacementBlock, // the block (as an itemstack) that replaces the block being interacted with upon shearing
  IItemStack inputBlock,       // the block that is to be sheared
  IItemStack jeiDisplayItem    // the item that should be displayed in JEI for this recipe
);
```

* * *

```zenscript
void addEntityRecipe(
  string name,              // the name of the recipe for the shearing
  IItemStack outputDrop,    // the item that is dropped upon shearing the specified entity
  IEntityDefinition entity, // the entity that is to be sheared to obtain the drop
  int cooldown              // the number of ticks (seconds multiplied by 20) it takes until the entity can be sheared again
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // the itemstack output that you wish to remove
);
```

* * *

### Examples

```zenscript
import mods.roots.RunicShears;

// Creates a recipe that obtains nether wart from red nether bricks
// and then converts the bricks into normal nether bricks
RunicShears.addRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Creates a recipe that obtains eggs from chickens with a 2 minute cooldown
RunicShears.addEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Removes all recipes (both entity & block) that give fey leather
RunicShears.removeRecipe(<roots:fey_leather>);
```

### Notes

Note that the `removeRecipe` function will attempt to remove any recipe (both runic shearing of blocks and of entities) that matches the desired output.