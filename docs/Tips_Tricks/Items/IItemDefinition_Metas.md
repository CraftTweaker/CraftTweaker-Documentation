# 使用IItemDefinitions来处理拥有metadata的物品可以节约很多时间

## 案例 
假设我们准备移除几个颜色的羊毛  
白色羊毛的metadata是0，其他颜色的metadata从1到15————因此总计有16种羊毛

如果我们要移除metadata为3至12的羊毛，该怎么做？  
我们不能只是单纯的移除它们（换句话说，使用 `<minecraft:wool:*>`），我们也不想把同样的东西重复写十遍  
虽然在本例中此做法完全可行, 但当需要修改的量变得更加庞大时，这个做法就会令人厌烦。

## 我们现在已经知道了/要知道什么

- recipes.remove 要求了 [IIngredient](/Vanilla/Variable_Types/IIngredient) 对象
- [IItemStack](/Vanilla/Items/IItemStack) 可被用做 [IIngredient](/Vanilla/Variable_Types/IIngredient) 因为 [IItemstack](/Vanilla/Items/IItemStack) 继承了 [IIngredient](/Vanilla/Variable_Types/IIngredient)
- 我们可以使用 [IItemDefinitions](/Vanilla/Items/IItemDefinition) 来创建 [IItemStacks](/Vanilla/Items/IItemStack)

## 解例

我们使用 [IItemDefinitions](/Vanilla/Items/IItemDefinition) 并定义一个范围，之后进行枚举.  
但我们也可以使用数组来进行这个操作，不过这种情况下，你需要输入每一个数字。
你也可以使用这一方法来去除正在使用的物品。

```
val itemDef = <minecraft:wool>.definition;

//does this for <minecraft:wool:3> to <minecraft:wool:12>
for i in 3 to 13{
	recipes.remove(itemDef.makeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] as int[];


//<minecraft:wool:3> to <minecraft:wool:12>
for i in numArray{
	itemDef.makeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> to <minecraft:wool:12>, but without 5 and 9
for i in 3 .. 13{
	if(i != 5 & i != 9){
		itemDef.makeStack(i).addShiftTooltip("Help me!");
	}
}

```
