### Class

```zenscript
import mods.roots.FlowerGrowth;
```

#### Methods

```zenscript
void removeRecipe(
  string name // The name of the recipe you wish to remove
);
```

* * *

```zenscript
void addRecipeBlockState(
  string name,      // The name of the recipe that you're adding
  IBlockState state // The state of the block of the flower
);
```

* * *

```zenscript
void addRecipeBlock(
  string name,  // The name of the recipe that you're adding
  IBlock block, // The block of the flower to be placed
  int meta      // The meta of the state of the flower block
);
```

* * *

### Examples

```zenscript
import mods.roots.FlowerGrowth;

// Removes the default recipe for dandelion
FlowerGrowth.removeRecipe("dandelion");

// Adds a Botania white flower using block state
FlowerGrowth.addRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Adds a Botania magenta flower using block + meta
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Notes

Currently untested with double-tall flowers.