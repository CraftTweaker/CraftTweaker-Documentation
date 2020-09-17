# IEntity定义

这听起来很稀少，所以它意味着什么？ 基本上，它是指在游戏中注册的一个实体，因此它是指在游戏中一个暴民。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.entity. IEntityDefinitiation;`

## 调用 IEntityDefinition 对象

```zenscript
///这些返回一个 IEntityDefinition 对象
val test2 = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## 职能

因此，这是它感兴趣的领域： 既然我们制造了这件事，我们怎么办？

### id

返回ID为字符串

```zenscript
//返回 "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### 名称

返回名称为字符串

```zenscript
//返回 "Sheep"
<entity:minecraft:sheep>.name;
```

### 创建实体

第一种方法只能在给定位置创建实体。  
第二种方法也会生成它。

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockpos)；
```

`世界` 是一个 [IWorld](/Vanilla/World/IWorld/) 对象。  
`blockPos` 是一个 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。

## 下拉列表

我们甚至可以添加和/或移除暴民的物品，这不是太棒了吗？

### 添加正常掉落项

这增加了一个正常的掉落，当暴民被以任何方式杀死时，就会出现这种下降。

```zenscript
valal entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(权重项, min,max);
entity.addDrop(<minecraft:stone> % 20);
```

`项目` 是要添加为丢弃的项目 [IItemStack](/Vanilla/Items/IItemStack/) 或 [重量项目](/Vanilla/Items/WeightedItemStack/)。  
`分钟` 是丢弃的最小金额和整数。 这是可选的。  
`max` 是丢弃的最大值和整数。 这是可选的。  
`几率` 是丢弃的机会。 这是可选的。 如果您使用了 [重量项目堆栈](/Vanilla/Items/WeightedItemStack/) 而不是 `项` 则不需要

### 添加仅限玩家的下拉列表

与正常掉落相同，但仅当实体被玩家杀死时。

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>,10,64);

//addPlayerOnlyDrop(重量,min,max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20,1, 3);
```

### 添加拖放功能

每当关联实体被杀死时，都会调用掉函数。 如果您需要在丢弃东西之前检查要求，您可以使用这个功能，比如只丢弃在特定生物群落和物品中。  
你将需要一个 [IentityDropfunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
    });
```

### 移除

这会移除掉一滴。

```zenscript
valal entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`项目` 是要从掉落中删除的物品， [IItemStack](/Vanilla/Items/IItemStack/)。

### 清除下拉列表

这会移除所有掉落。

```zenscript
valable entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### 获取

这将返回所有通过 CT 添加的 [IEntityDrop](/Vanilla/Entities/IEntityDrop/) 对象的掉落。

```zenscript
valal entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```