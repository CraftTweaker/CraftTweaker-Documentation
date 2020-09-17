### Classe

```zenscript
import mods.roots.AnimalHarvest;
```

#### Metodi

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
  string name, // the name of the type of fish
  IItemStack fish, // il tipo di pesce come un elemento stack
  int peso // il peso del pesce come un intero
);
```

* * *

```zenscript
void removeFish(
  IItemStack fish // il tipo di pesce da rimuovere come un elemento stack
);
```

* * *

### Esempi

```zenscript
import mods.roots.AnimalHarvest;

// Aggiunge un enderman come bersaglio per il rituale del raccolto animale.
// Generalmente sarebbe meglio usare gli animali.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Impedisce all'entità di dare gocce durante il rituale
AnimalHarvest. emoveEntity(<entity:minecraft:cow>);

// Aggiunge la crema di magma come un tipo di pesce con un peso di 20 (tutti i pesi basati su 
// la pesca standard. son loot table)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Rimuove il pesce pufferer dal rituale del raccolto animale
AnimalHarvest.removeFish(<minecraft:fish:3>);
```