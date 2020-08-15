### 类

```zenscript
import mods.roots.Pacifist;
```

#### 方法

```zenscript
无效添加实体(
  IEntity定义实体 // 添加到和平主义者列表
 的实体)；
```

* * *

```zenscript
无效移除实体(
  IEntityDefinition entity // 实体从和平列表中移除
)；
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