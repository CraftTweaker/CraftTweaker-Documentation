### Класс

```zenscript
import mods.roots.AnimalHarvest;
```

#### Методы

```zenscript
void addEntity(
  IEntityDefinition entity // entity to generate drops for
);
```

* * *

```zenscript
void removeEntity(
  IEntityDefinition entity // entity to stop generation drops for
);
```

* * *

```zenscript
void addFish(
  string name, // название типа рыбы
  IItemStack fish, // тип рыбы в виде единичного веса
  дюйма // вес рыбы как целочисленного числа
);
```

* * *

```zenscript
void removeFish(
  IItemStack fish // тип рыбы, который можно удалить в виде предмета
);
```

* * *

### Примеры

```zenscript
import mods.roots.AnimalHarvest;

// Добавляет enderman в качестве цели для ритуала урожая животных.
// Как правило, лучше использовать животных.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Prevents the entity from giving drops during the ritual
AnimalHarvest.removeEntity(<entity:minecraft:cow>);

// Adds magma cream as a type of fish with a weight of 20 (all weights based on 
// the standard fishing.json loot table)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Removes pufferfish from the Animal Harvest ritual
AnimalHarvest.removeFish(<minecraft:fish:3>);
```