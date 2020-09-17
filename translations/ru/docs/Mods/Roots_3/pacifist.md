### Класс

```zenscript
• импорт mods.roots.Pacifist;
```

#### Методы

```zenscript
void addEntity(
  IEntityDefinition entity // entity to add to the pacifist list
);
```

* * *

```zenscript
void removeEntity(
  IEntityDefinition entity // entity to remove from the pacifist list
);
```

* * *

### Примеры

```zenscript
import mods.roots.Pacifist;

// Добавляет enderman в виде pacifist
Pacifist. ddEntity(<entity:minecraft:enderman>);

// Предотвращает срабатывание коров в результате пацифизма
Pacifist.removeEntity(<entity:minecraft:cow>);
```