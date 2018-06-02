# 使用 IItemDefinitions（物品定义） 遍历附加值

## 案例
假设我们准备移除几种颜色的羊毛  
白色羊毛的附加值是0，其他颜色的附加值从1到15——因此总计有16种羊毛

如果我们要移除附加值为3至12的羊毛，该怎么做？  
我们不能只是简单的移除它们（换句话说，使用 `<minecraft:wool:*>`），也不想把同样的东西写十遍  
虽然在本例中此做法完全可行, 但当需要修改的量变得更加庞大时，这个做法就不怎么有效。

## 我们现在已经知道了/还要知道什么

- recipes.remove 要求了 [IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) 对象
- [IItemStack（物品堆）](/Vanilla/Items/IItemStack) 可被用做 [IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) 因为 [IItemstack（物品堆）](/Vanilla/Items/IItemStack) 继承了 [IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)
- 我们可以使用 [IItemDefinitions（物品定义）](/Vanilla/Items/IItemDefinition) 来创建 [IItemStacks（物品堆）](/Vanilla/Items/IItemStack)

## 解例

我们使用 [IItemDefinitions（物品定义）](/Vanilla/Items/IItemDefinition) 并定义一个整型范围，之后进行枚举.  
但我们也可以使用数组来进行这个操作，不过这种情况下，你需要输入每一个数字。
你也可以使用这一方法来去除正在使用的物品。

```js
val itemDef = <minecraft:wool>.definition;

//移除自 <minecraft:wool:3> 羊毛到 <minecraft:wool:12> 的羊毛
for i in 3 to 13{
	recipes.remove(itemDef.makeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] as int[];


//<minecraft:wool:3> 羊毛到 <minecraft:wool:12> 的羊毛
for i in numArray{
	itemDef.makeStack(i).addTooltip("无法合成");
}

//<minecraft:wool:3> 羊毛到 <minecraft:wool:12> 的羊毛，不过不包括 5 和 9
for i in 3 .. 13{
	if(i != 5 & i != 9){
		itemDef.makeStack(i).addShiftTooltip("帮帮我！");
	}
}

```
