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

Adds the specified entity to the Animal Harvest ritual list, making it eligible for drops. (Animal Harvest creatures form the default basis of Life Essence creation for Summon Creatures. See Summon Creatures for modifications of that derived list/emptying it.)

---


```zenscript
void removeEntity(
  IEntityDefinition entity // the entity to stop generating drops for
);
```

Removes the specified entity from the Animal Harvest ritual list, preventing it from dropping anything.

---


```zenscript
void addFish(
  string name,     // the name of the type of fish
  IItemStack fish, // the type of fish as an item stack
  int weight       // the weight of the fish as an integer
);
```

Adds a specific item to the fish drop table, making it eligible to be dropped if there is a water source block in the radius of the ritual.

---


```zenscript
void removeFish(
  IItemStack fish // the type of fish to remove as an item stack
);
```

Removes a specific item from the fish drop table, preventing it from being dropped in water source blocks.

---


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
