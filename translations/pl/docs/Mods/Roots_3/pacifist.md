### Klasa

```zenscript
importuj mods.roots.Pacifist;
```

#### Metody

```zenscript
Unieważnij addEntity(
  IEntityDefinition entity // the entity to add to the pacifist list
);
```

* * *

```zenscript
Unieważnij removeEntity(
  IEntityDefinition entity // the entity to remove from the pacifist list
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots.Pacfist;

// Dodaje endermana jako pacifist creature
Pacyfik. ddEntity(<entity:minecraft:enderman>);

// Zapobiega wywołaniu efektu pacfism
Pacfist.removeEntity(<entity:minecraft:cow>);
```