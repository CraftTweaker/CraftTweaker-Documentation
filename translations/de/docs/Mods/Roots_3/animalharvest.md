### Klasse

```zenscript
importieren mods.roots.AnimalHarvest;
```

#### Methoden

```zenscript
AddEntity(
  IEntityDefinition-Entität // Entität zum generieren von Drops für
);
```

* * *

```zenscript
Entfernungsentfernung(
  IEntityDefinition-Entität // Entität, um die Generierung von Drops für
 zu beenden);
```

* * *

```zenscript
void addFish(
  String Name, // Name des Fischtyps
  IItemStack Fisch, // Art von Fisch als Element-Stack
  int Gewicht // das Gewicht des Fischs als Ganzzahl
);
```

* * *

```zenscript
void removeFish(
  IItemStack fish // Art von Fisch zum Entfernen als Stapel
);
```

* * *

### Beispiele

```zenscript
import mods.roots.AnimalHarvest;

// Enderman als Ziel für das Animal Harvest Ritual hinzufügen.
// Im Allgemeinen wäre es besser, Tiere zu verwenden.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Verhindert, dass die Entität während des Rituals Tropfen gibt
AnimalHarvest. emoveEntity(<entity:minecraft:cow>);

// Fügt Magmacreme als Fischart mit einem Gewicht von 20 (alle Gewichte basierend auf 
// Standardfischerei. son-Beutetabelle)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Pufferfish aus dem Animal Ernte-Ritual entfernen
AnimalHarvest.removeFish(<minecraft:fish:3>);
```