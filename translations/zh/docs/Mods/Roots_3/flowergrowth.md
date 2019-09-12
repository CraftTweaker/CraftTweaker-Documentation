# Ritual of Flower Growth

### 所属类名

```zenscript
import mods.roots.FlowerGrowth;
```

#### 可用方法

```zenscript
static void removeRecipe(
  string name // The name of the recipe you wish to remove
);
```

* * *

```zenscript
static void addRecipeBlockState(
  string name,      // The name of the recipe that you're adding
  IBlockState state // The state of the block of the flower
);
```

* * *

```zenscript
static void addRecipeBlock(
  string name,  // The name of the recipe that you're adding
  IBlock block, // The block of the flower to be placed
  int meta      // The meta of the state of the flower block
);
```

* * *

### 例子

```zenscript
import mods.roots.FlowerGrowth;

// Removes the default recipe for dandelion
FlowerGrowth.removeRecipe("dandelion");

// Adds a Botania white flower using block state
FlowerGrowth.addRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Adds a Botania magenta flower using block + meta
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### 注意

Currently untested with double-tall flowers.