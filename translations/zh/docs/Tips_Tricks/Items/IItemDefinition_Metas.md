# 使用 IItemDefinition 以节省引用方块实体附加值的时间

## 问题

假设我们要删除某些特定颜色的羊毛的配方。 白羊毛的值为0，所有颜色的范围从meta值为1到值为15，因此共有16种。

我们要删除值为3到12之间的羊毛。我们该怎么做？ 我们不能只删除所有颜色的羊毛（例：使用`<minecraft:wool:*>`），但是我们也不想写相同的代码十次。 虽然在此示例中这将完全起作用，但是在大规模情况下（如删除一百种颜色羊毛配方），这将变得非常繁琐！ 

## 我们需要/应该知道什么

- recipes.remove 需要一个[IIngredient](/Vanilla/Variable_Types/IIngredient/)对象
- [IItemStack](/Vanilla/Items/IItemStack/) 可被用做 [IIngredient](/Vanilla/Variable_Types/IIngredient/) ，因为 [IItemstack](/Vanilla/Items/IItemStack/) 继承了 [IIngredient](/Vanilla/Variable_Types/IIngredient/) 对象
- 我们可以使用 [IItemDefinitions](/Vanilla/Items/IItemDefinition/) 去创建 [IItemStacks](/Vanilla/Items/IItemStack/) 对象

## 解决方法

我们使用 [IItemDefinitions](/Vanilla/Items/IItemDefinition/) 对象和一个整数范围（int）并遍历后者。 如果我们不能使用整数范围，我们也可以使用数字数组，但这将要求您输入所有必需的数字。你也可以使用这一方法来去除正在使用的物品。 

```zenscript
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