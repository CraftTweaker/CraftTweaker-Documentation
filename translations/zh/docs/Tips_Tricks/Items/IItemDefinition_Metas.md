# 使用 IItemDefinition 以节省引用方块实体附加值的时间

## 问题

让我们说我们想要删除羊毛的某些特定颜色的配方。  
白羊毛拥有元数据0，所有颜色范围从元1到元15，所以总共有16个。

我们想要去除带有第3至12元的羊毛。 我们做什么？  
我们不能仅仅移除所有他们(换言之，就是说) 使用 `<minecraft:wool:*>`，但我们也不想写10次相同的内容。  
在这个示例中，这会完全起作用，但在大规模上这会变得相当烦恼！

## 我们知道/需要知道什么

- 移除配方需要一个 [Igredient](/Vanilla/Variable_Types/IIngredient/) 对象
- [IItemStack](/Vanilla/Items/IItemStack/) 可以用作 [Iugrendient](/Vanilla/Variable_Types/IIngredient/) 为 [IItemstack](/Vanilla/Items/IItemStack/) extends [Igredient](/Vanilla/Variable_Types/IIngredient/)
- 我们可以使用 [IItemDefinition](/Vanilla/Items/IItemDefinition/) 来创建 [IItemStacks](/Vanilla/Items/IItemStack/)

## 解决方法

我们使用 [IItemDefinition](/Vanilla/Items/IItemDefinition/) 和一个整数范围并反转到后者。  
如果我们不能使用整数范围，我们也可以使用一个数组， 但这需要您输入所有必需的数字。  
您也可以使用此选项来排除某些正在使用的项目。

```zenscript
val itemDef = <minecraft:wool>。 fini;

//do This for <minecraft:wool:3> to <minecraft:wool:12>
for i in 3 to 13, p.
    resources.remove(itemDef). akeStack(i));
}


val numArray = int[3,4,5,6,7,8,8,9,10,11,12];


//<minecraft:wool:3> to <minecraft:wool:12>
for i in numArray@un.org
    item国防。 akeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> to <minecraft:wool:12>, 但没有 5 和 9
在 3 ... 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Help me!");
    }
}

```