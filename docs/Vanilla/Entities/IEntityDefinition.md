# 实体定义

这听上去有点可怕，它到底是什么意思呢？
基本上，他引用了一个在游戏中注册了的实体。所以可以说它引用游戏了中的一个生物。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.IEntityDefinition;`

## 获取实体定义对象
```
//这些将返回实体定义对象
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## 函数
事情从这里开始变得有趣了:
既然我们已经获取了这个对象，我们能用它来干些什么?

### id

以字符串形式返回ID
```
//返回 "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### 名称

以字符串形式返回名称
```
//返回 "Sheep"
<entity:minecraft:sheep>.name;
```

## 掉落物

我们甚至可以增加和/或移除生物的掉落物。这不是很棒吗？

### 常见掉落物

以下方法将加入常见掉落物。常见掉落物是指无论用何种方法杀死这个生物都有可能掉落这种物品。T
```
val entity = <entity:minecraft:sheep>;

//addDrop(物品,最小,最大,几率);
entity.addDrop(<minecraft:apple>);

//addDrop(加权物品堆,最小,最大);
entity.addDrop(<minecraft:stone> % 20);
```

`物品` 是被加入作为掉落物的物品，类型为[物品堆](/Vanilla/Items/IItemStack)或者[加权物品堆](/Vanilla/Items/WeightedItemStack).  
`最小` 是最少掉落物品的数量，类型为整数。它是可选参数。
`最大` 是最多掉落物品的数量，类型为整数。它是可选参数。
`几率` 是掉落物品的概率。它是可选参数。如果使用[加权物品堆](/Vanilla/Items/WeightedItemStack)而不是`物品`则不需要这个变量

### Add playeronly drop

Same as normal drops, but only if the entity was killed by a player.
```
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Add drop Function

A drop function is called whenever the associated Entity is killed. You can use this if you need to check requirements for before you drop something, like only dropping in a certain biome and stuff.  
You will need an [IEntityDropFunction](IEntityDropFunction):
```
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
	return <minecraft:iron_ingot> * 10;
	});
```


### Remove

This removes a drop.
```
val entity = <entity:minecraft:sheep>;

//remove(item);
entity.remove(<minecraft:wool>);
```
`item` is the item to be removed from being a drop and an [IItemStack](/Vanilla/Items/IItemStack).


### Get

This returns all drops that were added via CT as list of [IEntityDrop](IEntityDrop) Objects.
```
val entity = <entity:minecraft:sheep>;

//getDrops();
val dropList = entity.getDrops();
```
