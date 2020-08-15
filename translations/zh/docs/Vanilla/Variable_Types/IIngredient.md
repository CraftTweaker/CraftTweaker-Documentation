# 材料（IIngredient）

Iugrendient是配方的成分。  
这可能是 [一个项目](/Vanilla/Items/IItemStack/), [矿石字典条目](/Vanilla/OreDict/IOreDictEntry/), [液体](/Vanilla/Liquids/ILiquidStack/) 及更多。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.item.Ingredient；`

## 正在导入 IIngredient 包

Usually, you won't need this, but in some cases recipes won't work until you [import](/AdvancedFunctions/Import/) the IIngredient package.  
You can do this using the following import:

```zenscript
导入 craftweeper.item.IIngredial；
```

## 职能

因此，我们可以如何处理这个问题？

### 命令字符串

命令字符串是你如何在 ZS 中调用此物品。  
这可以是一个括号处理器或类似的东西。

```zenscript
valable item = <minecraft:iron_ingot>;

//prints "<minecraft:iron_ingot>"
print(item.commandString);
```

### 标记

你可以标记一个 IIngradient, 以便你以后可以在 [制作函数](/Vanilla/Recipes/Crafting/Recipe_Functions/) 中使用它。 您也可以检索之前应用的标记。

```zenscript
///标记带字符串皮卡
//item.marked(name) <- 名称是字符串!
valal markedPick = <minecraft:diamond_pickaxe>.marked("选取");

//prints "选取"
print(markedPick.mark);
```

### 金额

如果您想要使用多个给定物品，您可以设置一个 IIngredient。  
这很容易就像用整数乘法。  
也可以检索数量。

```zenscript
val multipleApples = <minecraft:apple> * 3;

//prints 3
print(multipleApplices.amount);
```

### 正在进行IIngredient

有时候你想要IIngredient X 或 Y，但不想为每个可能性创建一个配方？ 这就是为什么IIngredients有或方法：

```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val = item1 | item2;
val either2 = item1.or(item2);
```

### 获取可能的物品或液体物品

偶尔，IIngredient 代表不止一个物品。 例如，如果您正在使用 [OreDictEnter](/Vanilla/OreDict/IOreDictEntry/) 或者如果您发现了两个成分。  
您可以获取此物品的所有可能项目作为列表<[IItemStack](/Vanilla/Items/IItemStack/)> 列表使用第一个功能。  
第二个函数与第一个函数相同，但返回 [IItemStack](/Vanilla/Items/IItemStack/)[] 而不是列表。 对于第三个函数中的液体，只有返回 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 列表。

```zenscript
//Returns an IItemStack List
//possible items: All iron ingots and the gold ingot from MC
val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>;


//Returns an ILiquidStack List|
//possible liquids: Lava and Water
val liquidsIngredient = <liquid:lava> | <liquid:water>;


for item in itemsIngredient.items{
    //Prints each possible item's Display name
    print(item.displayName);
}

for item in itemsIngredient.itemArray{
    //Prints each possible item's Display name
    print(item.displayName);
}

for liquid in liquidsIngredient.liquids{
    //Prints each possible liquid's Display name
    print(liquid.displayName);
}

for liquid in <minecraft:water_bucket>.liquids {
    //Prints the contained liquid, i.e. water.
    / 5月份不适用于每个项目。
    print(leid.displayname);
}
```

### 制作时变换IIngredient

有时你想不要在制造时消耗一个物品，而是收到损坏的物品或退回一个完全不同的物品。  
这是变换器所要做的事情。

```zenscript
<br />valable item = <minecraft:apple>;

//item 不会被消耗，将保持在网格
变现item = item。 euse();

//item不会被消耗, 整个堆栈将被退回给你 (do /give).
transformeditems = item.giveBack();

///items 将被消耗，但会给您指定的堆栈(制作槽将被清除!)。
转化物项=物品。 iveBack(<minecraft:potato>);

//item 将被指定项目替换，它将转到制作槽
变换项= 项目。 赎金替换(<minecraft:potato>);

//damage the item by 1
transformmeditem = item 赎金损害();

//damage the item by 给定的值
transformeditem = item.transformDamage(3);

///item will be consided, what.
转换项= item.noReturn();

//Causes 多个要消耗的项目。
transformeditems = item.transformConsume(3)；
```

### 成分条件

有时候你想要你的成分有一个特定的标签，或者在(不) 损坏的情况下只能起作用。 这些条件可以通过以下方式添加到您的成分：

```zenscript
valable item = <minecraft:apple>;

//item 只会在至少1点伤害
var conditionitem = item 的情况下被接受。 nlyDamaged();

//item只能在至少指定的伤害点
条件项=物品的情况下被接受。 nlyDamageAtLeast(10)；

//items 只能在指定的伤害点
条件下才能被接受。 nlyDamageAtmost(100)；

//items 只会被接受，伤害点数大于或等于第一个或第二个整数或等于第二个整数。
条件项目 = item.only DamageBetween(10,100)；

///items 只接受指定的标签。 项目可能有比指定的更多/更多的标签，选中时会忽略这些标签。
///如果你想要JEI在配方屏幕上显示标签，你需要使用"withTag(标签)"
conditionedite = item。 nlyWidTag({显示: {name: "Tomato"}});

/items 只接受指定的标签。 项目可能有比指定的更多/更多的标签，选中时会忽略这些标签。
/说明：这可能不适用于所有成分，但它将适用于项目。 专业版使用这个选项就是JEI会在该程序中显示标签！
条件项目 = item.withTag({显示: {名称: "Tomato"}});

///items 只会在至少一个指定数量的堆栈中被接受。 主要与消费变压器结合使用。
// 请注意，如果您只添加这个，它仍然只能消耗一件工艺品。
条件项目 = item.onlystack(32)；
```

### 匹配

如果您想要检查一个 IItemStack 是否匹配您的 Ingredient ，您可以使用匹配的方法。 这将返回布尔值。 如果IIngredient 表示液体，它将检查该物品是否是该液体的有效容器。

```zenscript
打印(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
打印(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>);
```

你也可以匹配两个IIngredient Objects，在这种情况下你需要使用 ```in``` 操作符：

```zenscript
val ingots = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
oreIngot = <ore:ingotIron>;
val innotGold = <minecraft:gold_ingot>;

/true 作为创作者的创作品 <minecraft:gold_ingot>
inots 有创作金矿；

/false as <minecraft:iron_ingot> 无法在 <ore:ingotGold>
oreIntogoto;
```