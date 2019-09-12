# Animal Harvest

### Class

```zenscript
import mods.roots.AnimalHarvest;
```

#### Methods

```zenscript
static void addEntity(
  IEntityDefinition entity // the entity to generate drops for
);
```

* * *

```zenscript
static void removeEntity(
  IEntityDefinition entity // the entity to stop generating drops for
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
```