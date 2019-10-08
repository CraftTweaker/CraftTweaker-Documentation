### 类

```zenscript
import mods.roots.Pacifist;
```

#### 方法

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

### 例子

```zenscript
import mods.roots.Pacifist;

// 将末影人加入被动生物列表。
Pacifist.addEntity(<entity:minecraft:enderman>);

// 将牛移出被动生物列表。
Pacifist.removeEntity(<entity:minecraft:cow>);
```