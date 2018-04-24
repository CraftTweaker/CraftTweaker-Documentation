# 实体定义

这听上去有点可怕，它到底是什么意思呢？
基本上，他引用了一个在游戏中注册了的实体。所以可以说它引用游戏了中的一个生物。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.IEntityDefinition;`

## 获取实体定义对象
```js
//这些将返回实体定义对象
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## 函数
事情从这里开始变得有趣了:
既然我们已经获取了这个对象，我们能用它来干些什么?

### id

以字符串形式返回ID
```js
//返回 "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### 名称

以字符串形式返回名称
```js
//返回 "Sheep"
<entity:minecraft:sheep>.name;
```

### create entity
The first method only creates an entity on the given location.  
The second one also spawns it.
```
<enity:minecraft:sheep>.createEntity(world);
<enity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`world` is an [IWorld](/Vanilla/World/IWorld) object.  
`blockPos` is an [IBlockPos](/Vanilla/World/IBlockPos) object.


## Drops

我们甚至可以增加和/或移除生物的掉落物。这不是很棒吗？

### 常见掉落物

以下方法将加入常见掉落物。常见掉落物是指无论用何种方法杀死这个生物都有可能掉落这种物品。T
```js
val entity = <entity:minecraft:sheep>;

//addDrop(物品,最小数量,最大数量,几率);
entity.addDrop(<minecraft:apple>);

//addDrop(加权物品,最小数量,最大数量);
entity.addDrop(<minecraft:stone> % 20);
```

`物品` 是被加入作为掉落物的物品，类型为[物品堆](/Vanilla/Items/IItemStack)或者[加权物品堆](/Vanilla/Items/WeightedItemStack).  
`最小` 是最少掉落物品的数量，类型为整数。它是可选参数。
`最大` 是最多掉落物品的数量，类型为整数。它是可选参数。
`几率` 是掉落物品的概率。它是可选参数。如果使用[加权物品堆](/Vanilla/Items/WeightedItemStack)而不是`物品`则不需要这个变量

### 仅玩家可获取掉落物

和普通掉落物一致，但是只有在实体被玩家杀死的情况下才会掉落。
```js
//addPlayerOnlyDrop(物品,最小数量,最大数量,几率);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(加权物品, 最小数量, 最大数量);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### 掉落物函数

掉落物函数只有在相关实体死亡的时候才会被调用。如果你想要给掉落物增加一些判定条件就可以使用它，比如在特定生物群系掉落特定物品。  
你可能需要 [实体掉落物函数](IEntityDropFunction)：
```js
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
	return <minecraft:iron_ingot> * 10;
	});
```


### 移除掉落物

这样可以移除某个掉落物
```js
val entity = <entity:minecraft:sheep>;

//remove(物品);
entity.remove(<minecraft:wool>);
```
`物品` 就是需要移除的掉落物，是一个[物品堆](/Vanilla/Items/IItemStack)类型。


### 获取掉落物列表

能够返回所有通过 CraftTweaker 添加的[实体掉落物](IEntityDrop)对象列表
```js
val entity = <entity:minecraft:sheep>;

//getDrops();
val dropList = entity.getDrops();
```
