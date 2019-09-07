# Animal Harvest

### 所属类名

```zenscript
import mods.roots.AnimalHarvest;
```

#### 可用方法

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

### 例子

```zenscript
import mods.roots.AnimalHarvest;

// Adds an enderman as a target for the Animal Harvest ritual.
// Generally it would be better to use animals.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Prevents the entity from giving drops during the ritual
AnimalHarvest.removeEntity(<entity:minecraft:cow>);
```