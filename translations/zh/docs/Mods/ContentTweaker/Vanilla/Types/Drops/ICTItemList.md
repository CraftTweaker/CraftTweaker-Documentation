# ICTItemList

ICTItemList 是 [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) 作为第一个参数。  
这是将被给定的 [块丢弃的项目列表](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/)。  
根据活跃的其他事件处理程序，它可能已经包含一些项目，或者它可能是空的。

## 导入类

如果你发现自己需要导入这个类，这就是你这样做：

```zenscript
import mods.contenttweaker.ItemList;
```

## 添加项目到列表

您可以使用下面的函数添加 [IItemStack](/Vanilla/Items/IItemStack/) 或 [重量项目](/Vanilla/Items/WeightedItemStack/) 到列表中：

```zenscript
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

list + (<minecraft:seeds> % 10);
```

## 从列表中删除项目

您只能使用项目的索引删除项目，或者您可以清除整个列表。

```zenscript
list.remove(1)；

list.clear();
```

## 从列表中获取项目

您可以通过其索引获取一个项目，或者您可以获取整个列表作为数组或列表：

```zenscript
导入craftweeker.item.IItemStack;

val itemAt = list.get(0); /as IItemStack

val itemArray = list.getArray(); //as IItemStack[……]

val itemList = list.getList(); //as [IItemStack]
```

## 其他信息

您也可以从列表中撤回此信息：

```zenscript
list.getLength();
```