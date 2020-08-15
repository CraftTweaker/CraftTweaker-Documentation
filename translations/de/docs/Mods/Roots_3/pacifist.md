### Klasse

```zenscript
importieren mods.roots.Pacifist;
```

#### Methoden

```zenscript
AddEntity(
  IEntityDefinition Entität // Entität zum Hinzufügen zur Pazifistenliste
);
```

* * *

```zenscript
Entfernt nichtig (
  IEntityDefinition Entität // Entität für Entität der Pazifistenliste
);
```

* * *

### Beispiele

```zenscript
import mods.roots.Pacifist;

// Fügt einen Enderman als Pazifist
hinzu. ddEntity(<entity:minecraft:enderman>);

// Kühe daran hindern, den Pazifismus-Effekt auszulösen:
Pacifist.removeEntity(<entity:minecraft:cow>);
```