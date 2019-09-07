# "Untrue Pacifist" Advancement Creatures

### Class

```zenscript
import mods.roots.Pacifist;
```

#### Methods

```zenscript
static void addEntity(
  IEntityDefinition entity // the entity to add to the pacifist list
);
```


---


```zenscript
static void removeEntity(
  IEntityDefinition entity // the entity to remove from the pacifist list
);
```


---


### Examples

```zenscript
import mods.roots.Pacifist;

// Adds an enderman as a pacifist creature
Pacifist.addEntity(<entity:minecraft:enderman>);

// Prevents cows from triggering the pacifism effect
Pacifist.removeEntity(<entity:minecraft:cow>);
```
