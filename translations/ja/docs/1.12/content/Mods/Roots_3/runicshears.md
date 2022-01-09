
### Class

```zenscript
import mods.roots.RunicShears;
```

#### Methods

```zenscript
void addRecipe(
  string name,                  // the name of the recipe being created
  IItemStack outputDrop,        // the item output obtained by performing the shearing
  IPredicate inputState,        // a predicate describing the input state (see Predicates)
  IBlockState replacementState, // the replacement blockstate described as a block state
  IItemStack displayItem        // the item that should be displayed in integration for this recipe
);
```

Creates a recipe with the defined name that creats the specified itemstack whenever runic shears are used on the specified input state, as well as the state that will replace the input state. Additionally, an optional item that can be displayed in integration.

---


```zenscript
void addRecipeViaItem(
  string name,                 // the name of the recipe being created
  IItemStack outputDrop,       // the item output obtained by performing the shearing
  IItemStack inputBlock,       // the block that is to be sheared
  IItemStack replacementBlock, // the block (as an itemstack) that replaces the block being interacted with upon shearing
  IItemStack displayItem       // the item that should be displayed in integration for this recipe
);
```

As above, but using ItemStacks that describe ItemBlocks to determine blockstates.

---


```zenscript
void addEntityRecipe(
  string name,              // the name of the recipe for the shearing
  IItemStack outputDrop,    // the item that is dropped upon shearing the specified entity
  IEntityDefinition entity, // the entity that is to be sheared to obtain the drop
  int cooldown              // the number of ticks (seconds multiplied by 20) it takes until the entity can be sheared again
);
```

Create a Runic Shears recipe that provides the outputDrop whenever the specified entity is interacted with using runic shears. The drop will only be created once every specified cooldown period. The entity specified must derive from EntityLivingBase.

---


```zenscript
void removeRecipe(
  IItemStack output // the itemstack output that you wish to remove
);
```

Removes any/all recipes that have the output item specified.

---


```zenscript
void removeEntityRecipe(
  IEntityDefinition entity // the entity you wish to remove the recipef or
);
```

Removes any/all recipes related to that entity

---


### 使用例

```zenscript
import mods.roots.RunicShears;

// Creates a recipe that obtains nether wart from red nether bricks
// and then converts the bricks into normal nether bricks
RunicShears.addRecipe("nether_wart_block", <minecraft:nether_wart>*2, StatePredicate.create(<blockstate:minecraft:red_nether_brick>), <blockstate:minecraft:nether_brick>, <minecraft:red_nether_brick>);

// Removes the default chicken->mystical feather recipe
RunicShears.removeEntityRecipe(<entity:minecraft:chicken>);

// Creates a recipe that obtains eggs from chickens with a 2 minute cooldown
RunicShears.addEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Removes all recipes (both entity & block) that give fey leather
RunicShears.removeRecipe(<roots:fey_leather>);
```

### Notes

Note that the `removeRecipe` function will attempt to remove any recipe (both runic shearing of blocks and of thaumcraft.entities) that matches the desired output.
