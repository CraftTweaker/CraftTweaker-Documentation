
### Class

```zenscript
import mods.roots.Pacifist;
```

#### Methoden

```zenscript
void addEntity(
  IEntityDefinition entity // the entity to add to the pacifist list
);
```

Allows the addition of new entities to the list of 'Pacifist' creatures, i.e., those that, when killed, will grant the Untrue Pacifist advancement.

---


```zenscript
void removeEntity(
  IEntityDefinition entity // the entity to remove from the pacifist list
);
```

Removes an entity from the list of 'Pacifist Creatures', i.e., those that, when killed, will grant the Untrue Pacfist advancement.

---


### Beispiele

```zenscript
import mods.roots.Pacifist;

// Adds an enderman as a pacifist creature
Pacifist.addEntity(<entity:minecraft:enderman>);

// Prevents cows from triggering the pacifism effect
Pacifist.removeEntity(<entity:minecraft:cow>);
```
