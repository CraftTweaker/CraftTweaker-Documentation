
### 类

```zenscript
import mods.roots.Pacifist;
```

#### 使用方式

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


### 示例

```zenscript
import mods.roots.Pacifist;

// 将末影人加入被动生物列表。
Pacifist.addEntity(<entity:minecraft:enderman>);

// 将牛移出被动生物列表。
Pacifist.removeEntity(<entity:minecraft:cow>);
```
