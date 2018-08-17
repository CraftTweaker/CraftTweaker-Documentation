# 矿物词条（IOreDictEntry）

如果说[矿物词典](IOreDict)是一本词典，那么矿物词条就是词典中的条目。
它们由名称（词条名）和解释（所有能匹配的物品）组成。

## 导入包

如果你的脚本遇到问题，请检查是否导入了相关的包。（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)。）所以保险起见，请在一开始写脚本的时候就确保导入了可能用到的包。

`import crafttweaker.oredict.IOreDictEntry;`

## 获取对象

由许多方式获取一个`IOreDictEntry`对象：
如果你引用了一个不存在的矿物词典条目，它会自动被创建。

- 使用[IOreDict](IOreDict) 类.
- 使用[矿物框架处理器](/Vanilla/Brackets/Bracket_Ore).
- 使用[IItemDefinition的矿物词典获取器](/Vanilla/Items/IItemDefinition).

## ZenGetters

你可以使用 这些只读属性来获取矿物词典的一些信息：

| name      | Description                              | Return type                             |
|-----------|------------------------------------------|-----------------------------------------|
| name      | 矿物词典条目的名称                            | string                                  |
| empty     | 返回矿物词典条目是否为空          | bool                                    |
| firstItem | 返回矿物词典条目中注册的第一个物品 | [IItemStack](/Vanilla/Items/IItemStack) |

## ZenMethods

你可以在矿物词典条目（IOreDictEntry）对象上使用这些方法：

### Add/Remove items

```
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] items);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### 检查一个矿物词典条目是否包含物品

你可以用`in`和`has`这两个关键词检查一个矿物词典条目是否含有某种物品:

```
val oreDictEnt = <ore:ingotIron>;

if(oreDictEnt in <minecraft:iron_ingot>){
	print("Iron is in the oreDict!");
}

if(oreDictEnt has <minecraft:iron_ingot>){
	print("Iron still is in the oreDict!");
}
```

### 镜像映射矿物词典条目

镜像映射意味着把一个矿物词典条目的内容用作为`mirror`函数的参数的条目的内容完全替换。

```
//令铁和铜等价
val iron = <ore:ingotIron>;
val copper = <ore:ingotCopper>;

//把所有铜词条的内容加到铁词条里
iron.addAll(copper);


//把铜作为铁的映射。这样铜的内容就会和铁一样。
copper.mirror(iron);
```

（译者注：这里原作者的注释里语义好像写错了。翻译时已经按照译者理解和实验进行了纠正。）

## IIngredient实现

矿物词典条目（IOreDictEntry）拓展了[IIngredient](/Vanilla/Variable_Types/IIngredient)。这意味着所有[IIngredient](/Vanilla/Variable_Types/IIngredient)的方法对于矿物词典条目来说也是适用的。
你也可以把矿物词典条目类型的对象放到`IIngredient`类型的数组里（例如在合成台配方方法中的那些）。

### 遍历矿物词典条目中的所有物品

```
val iron = <ore:ingotIron>;

for item in iron.items{
	recipe.remove(item);
}
```
