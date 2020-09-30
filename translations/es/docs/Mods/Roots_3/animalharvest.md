### Class

```zenscript
import mods.roots.AnimalHarvest;
```

#### Methods

```zenscript
void addEntity(
  IEntityDefinition entity // the entity to generate drops for
);
```

* * *

```zenscript
void removeEntity(
  IEntityDefinition entity // the entity to stop generating drops for
);
```

* * *

```zenscript
void addFish(
  string name,     // the name of the type of fish
  IItemStack fish, // the type of fish as an item stack
  int weight       // the weight of the fish as an integer
);
```

* * *

```zenscript
void removeFish(
  IItemStack fish // the type of fish to remove as an item stack
);
```

* * *

### Examples

```zenscript
import mods.roots.AnimalHarvest;

// Adds an enderman as a target for the Animal Harvest ritual.
// Generally it would be better to use animals.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Prevents the entity from giving drops during the ritual
AnimalHarvest.removeEntity(<entity:minecraft:cow>);

// Adds magma cream as a type of fish with a weight of 20 (all weights based on 
// the standard fishing.json loot table)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Removes pufferfish from the Animal Harvest ritual
AnimalHarvest.removeFish(<minecraft:fish:3>);
```