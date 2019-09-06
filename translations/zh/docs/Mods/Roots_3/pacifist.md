# ”不忠的和平主义“进步生物 （让敌对或中立生物成为被动生物）

### 类

```java
import mods.roots.Pacifist;
```

#### 方法

```java
static void addEntity(
  IEntityDefinition entity // 需要改为被动生物的怪物
);
```

* * *

```java
static void removeEntity(
  IEntityDefinition entity // 需要移出出被动生物列表的生物列表。
);
```

* * *

### 例子

```java
import mods.roots.Pacifist;

// 将末影人加入被动生物列表。
Pacifist.addEntity(<entity:minecraft:enderman>);

// 将牛移出被动生物列表。
Pacifist.removeEntity(<entity:minecraft:cow>);
```