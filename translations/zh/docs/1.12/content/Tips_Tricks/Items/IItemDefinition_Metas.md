# 使用 IItemDefinition 以节省引用方块实体附加值的时间

## 问题
假设我们要删除某些特定颜色的羊毛的配方。 扁平化前，白色羊毛的数据值是 0，所有彩色羊毛的数据值范围是 1 至 15，因此共有16种。

我们要删除数据值为 3 至 12 的羊毛。 怎么办？  
我们不能全部删掉（如使用 `<minecraft:wool:*>`），但也不想把一样的代码写 10 遍。  
虽然在这个例子里这样确实可以，但倘若在大规模的情况下，这会让你苦不堪言！

## 我们需要/应该知道什么

- recipes.remove 需要一个[IIngredient](/Vanilla/Variable_Types/IIngredient/)对象
- [IItemStack](/Vanilla/Items/IItemStack/) 可被用做 [IIngredient](/Vanilla/Variable_Types/IIngredient/) ，因为 [IItemstack](/Vanilla/Items/IItemStack/) 继承了 [IIngredient](/Vanilla/Variable_Types/IIngredient/) 对象
- 我们可以使用 [IItemDefinitions](/Vanilla/Items/IItemDefinition/) 去创建 [IItemStacks](/Vanilla/Items/IItemStack/) 对象

## 解决方法

我们使用 [IItemDefinitions](/Vanilla/Items/IItemDefinition/) 对象和一个整型数值（int）并遍历后者。  
如果我们不能用整型，也可以使用数值数组，但将要求输入所有必需的数字。  
你也可以使用这一方法来去除正在使用的物品。

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