# 关联数组

关联数组 (有时也称为地图或词典) 就像普通的 [数组](/AdvancedFunctions/Arrays_and_Loops/) 一样，它能够存储多个条目。 然而，与 [不同的数组](/AdvancedFunctions/Arrays_and_Loops/) 不同，您可以选择你想要索引的类型，或者(我们在地图中称它) 键值是什么！

## 声明关联数组

使用大括号 ` {} ` 和冒号 `: ` 来声明关联数组

```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

让我们对其进行拆分分析：

- ` val myAssocArray = ` 标准变量声明
- ` {` 先生，这是一个关联数组！
- `dirt : <minecraft:dirt>` 使用 `dirt` 字符串映射 `<minecraft:dirt>`
- `, ` 等下，这还没完
- `gold : <minecraft:gold_ingot>` 使用 `gold` 字符串映射 `<minecraft:gold_ingot>`
- `} ` 长官，数组已经写完了！
- ` as IItemStack[string]; `说明这是使用字符串作为键、 IItemStacks 作为值的关联数组。

好的，那么我在使用它们时需要注意些什么呢？

- Zenscript 中绝大部分数据类型都可以作为键或值。
- 你无法用变量作为声明数组的键（使用`{}`的那个），因为这些文本将会被解释成字符串！

## 引用关联数组中的项

你指的是关联数组内的项目，你指的是正常的 [数组](/AdvancedFunctions/Arrays_and_Loops/)中的项目:  
`数组[index]`  
只有这种情况才是不同的 你不一定需要使用整数作为索引，但无论你声明数组是哪种类型！

```zenscript
<br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "这是我"
} as string[IItemStack];

//数组名[索引]
print(assocArray[<minecraft:dirt>]);

//只要类型匹配，这里也可以使用变量
print(assocArray[dirt]);
```

有一种特殊情况，当索引为字符串的时：  
使用memberGetter方法（见下）就可以直接引用项：

```zenscript
val assocWithStrings = {
    //你可以使用 ""
    "one" : "1",

    //但这不是强制的
    two : "2"
} as string[string];

//你既可以使用 memberGetter
print(assocWithStrings.one);

//也可以使用传统的索引
print(assocWithStrings["two"]);
```

## 修改关联数组中的项

与数组一样，可以使用 ` 数组名[索引] = 新的值 ` 来修改关联数组中的项.   
但有一个主要的区别：   
数组有固定长度，但索引没有。 这意味着你随时可以通过向数组中添加先前并不包含的索引来添加新的项！

```zenscript
val changingArray = {
    <minecraft:dirt> : "这是我",
    <minecraft:gold_ingot> : "我讨厌它"
} as string[IItemStack];

val gg = <minecraft:gold>;

//覆盖 gold_ingot 的值
changingArray[gg] = "我爱它";

//添加新条目
changingArray[<minecraft:grass>] = "能量！";
```

## 检索关联数组的键集和项集

键集（KeySet）是一个包含了所有映射的键的数组。  
项集（valueSet）是一个包含了所有映射的项的数组。  
条目集（entrySet）是一个包含了所有映射条目的数组（见下）。

```zenscript
myAssocArray.keySet   //键集
myAssocArray.keys     //键集
myAssocArray.values   //项集
myAssocArray.valueSet //项集
myAssocArray.entrySet //条目集
```

## 遍历一个关联数组

这里提供了两种遍历方法来遍历关联数组：

- 键遍历法：遍历所有的键，只需要传入一个参数
- 键-值遍历法：同时遍历键和值，需要传入两个参数

让我们来遍历一个存储了工作台配方的关联数组：

- 键作为的配方的输出，类型为 [物品堆（IItemStack）](/Vanilla/Items/IItemStack/)
- 值作为配方的输入，类型为 [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/)
- 我们将使用如下所示的键迭代器: ` for key in assocArray {代码;}`
- 我们也可以使用如下所示的键-值迭代器: ` for key, value in assocArray {代码;}`

```zenscript
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> : [[dirt, dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[dirt, dirt, dirt],[dirt, null, dirt],[dirt, dirt, dirt]];

//键是 草（grass）、金锭（goldIngot）和泥土（dirt）
for key in recipeMapShaped {
    recipes.addShaped(key, recipeMapShaped[key]);
}


//键是 草（grass）、金锭（goldIngot）和泥土（dirt），值是 他们各自的配方
for key, value in recipeMapShaped {
    recipes.addShaped(key, value);
}
```

# ZenType 条目

一个映射条目包含一组键和值。  
目前仅能通过映射的 entrySet 方法获取这个条目。

你可以使用 getters 来具体获取其中的 `键` 和 `值`

```zenscript
//从已有的映射/关联数组获取映射条目
val myEntry = map.entrySet[0];


myEntry.key;    //返回条目的键。
myEntry.value;  //返回该条目的值。
```