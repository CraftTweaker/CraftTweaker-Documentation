# ICTItemList

The ICTItemList is what an [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) uses as first parameter.  
It is a list of items that will be dropped by the given [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/).  
Depending on other event handlers active it might already contain some items, or it might be empty.

## Importing the class
If you ever find yourself in need of importing this class, this is how you do it:
```
import mods.contenttweaker.ItemList;
```

## Adding items to the list

You can add [IItemStacks](/Vanilla/Items/IItemStack/) or [WeightedItemStacks](/Vanilla/Items/WeightedItemStack/) to the list using the functions below:

```
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

list + (<minecraft:seeds> % 10);
```

## Removing items from the list

You can only remove items using the item's index, or you can clear the whole list.
```
list.remove(1);

list.clear();
```

## Getting items from the list

You can either get an item by its index or you can get the whole list as either an array or a list:
```
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); //as [IItemStack]
```


## Other information

You can also retreive this information from the list:

```
list.getLength();
```