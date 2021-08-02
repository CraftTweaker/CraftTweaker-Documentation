# 尖括号引用

尖括号引用或BracketExpressionParser（简称BEP）是引用游戏对象（或创建新对象）的代码片段，如物品、区块或资源位置。

一个尖括号引用的例子是物品尖括号引用：

```zenscript
<item:minecraft:diamond>
```

这是指游戏中的物品钻石。

## 一般格式

尖括号引用总是以其类型开始，所以一个物品尖括号引用以`item`开始，一个方块尖括号引用以`block`开始。

尖括号引用的一般格式是：

```zenscript
<type:modid:name>
```

如上所述，`type`是指被调用的是哪种尖括号引用。 `modid`是指拥有该对象的模组。 `name`是指被引用的对象的名称。

还有以下几个例子：

```zenscript
<block:minecraft:white_wool> // 指方块白色羊毛
<item:minecraft:white_wool> // 指物品白色羊毛.
<fluid:minecraft:water> // 指流体水.
<effect:minecraft:haste> // 指急迫效果.
```

虽然大多数时候都使用上面的格式，但在有些情况下，根本不需要使用modid。

## 无模组的格式

在不需要modid来引用对象的情况下（比如文本格式化，mods不能添加新对象），会使用不同的格式。

```zenscript
<type:name>
```

这方面的一些例子包括：

```zenscript
<blockmaterial:earth> // 指Earth方块材料.
<directionaxis:x> // 指X轴.
<entityclassification:monster> // 指实体分类怪物
```

## 标签格式

##### 注意：这里说的是原版数据包的标签

[Tags](https://minecraft.gamepedia.com/Tag) are special and need another layer of categorization, as a tag with the name `minecraft:white_wool` could be referring to both an ItemTag and a BlockTag.

The format used on Tags is:

```zenscript
<tag:type:modid:name>
```

Examples of this are:

```zenscript
<tag:items:minecraft:white_wool> // References the White Wool Item Tag.
<tag:blocks:minecraft:white_wool> // References the White Wool Item Tag.
<tag:fluids:minecraft:water> // References the Water Fluid Tag.
```


## 其他格式

At the end of the day, Bracket Handlers don't have a fully defined format, a mod could come along and add a Bracket Handler in a completely different format than listed here, the ones listed here are just the ones used in CraftTweaker itself and to listed to try and give an understanding of how Bracket Handlers look.


## 获取尖括号引用

Since mods can add their own Bracket Handlers, it is impossible to list them all here, there is a command in-game that will output a list of all Bracket Handlers and their values though! Simply use `/ct dumpBrackets` and look in the newly created `ct_dumps` folder for them!