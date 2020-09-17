### クラス

```zenscript
import mods.roots.Pacifist;
```

#### メソッド

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

### 使用例

```zenscript
import mods.roots.Pacifist;

// Adds an enderman as a pacifist creature
Pacifist.addEntity(<entity:minecraft:enderman>);

// Prevents cows from triggering the pacifism effect
Pacifist.removeEntity(<entity:minecraft:cow>);
```