### Classe

```zenscript
import mods.roots.Pacifist;
```

#### Metodi

```zenscript
void addEntity(
  IEntityDefinition entity // the entity to add to the pacifist list
);
```

* * *

```zenscript
void removeEntity(
  IEntityDefinition entity // the entity to remove from the pacifist list
);
```

* * *

### Esempi

```zenscript
import mods.roots.Pacifist;

// Aggiunge un enderman come una creatura pacifista
Pacifist. ddEntity(<entity:minecraft:enderman>);

// Impedisce alle vacche di innescare l'effetto pacifismo
Pacifist.removeEntity(<entity:minecraft:cow>);
```