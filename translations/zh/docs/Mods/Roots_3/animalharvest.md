### 所属类名

```zenscript
导入 mods.roots.AnimalHarvest;
```

#### 可用方法

```zenscript
无效添加实体(
  IEntity定义实体 // 实体为
 生成掉落的实体)；
```

* * *

```zenscript
无效移除实体(
  IEntityDefinition entity // 实体停止为
 生成掉落) ;
```

* * *

```zenscript
无效 addFish(
  字符串名称, // 鱼类类型
  IItemStack 鱼类的名称 // 鱼作为物件堆栈的类型
  int 权重// 鱼作为整数
；
```

* * *

```zenscript
无效移除鱼类(
  IItemStack鱼类// 鱼类类型作为物品堆栈
)；
```

* * *

### 例子

```zenscript
导入 mods.roots.AnimalHarvest;

// 添加一名末影人作为动物收获仪式的目标。
/ 一般而言，最好使用动物。
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// 阻止实体在仪式期间提供掉落
AnimalHarvest. 表情实体(<entity:minecraft:cow>);

// 添加岩浆，作为重量为20的鱼类（根据 
// 标准捕捞的所有重量）。 儿子抢劫桌面)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// 从动物收获仪式中移除pufferfish
AnimalHarvest.removeFish(<minecraft:fish:3>);
```