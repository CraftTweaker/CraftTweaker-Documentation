# ItemsAndEmeraldsToItems

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.ItemsAndEmeraldsToItems;
```


## Implemented Interfaces
ItemsAndEmeraldsToItems implements the following interfaces. That means all methods defined in these interfaces are also available in ItemsAndEmeraldsToItems

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new ItemsAndEmeraldsToItems(fromItem as ItemLike, fromCount as int, toItem as ItemDefinition, toCount as int, maxUses as int, villagerXp as int) as ItemsAndEmeraldsToItems
new ItemsAndEmeraldsToItems(<item:minecraft:dirt>, 4, <item:minecraft:diamond>, 1, 8, 2);
```
| Parameter  |                        Type                        |                             Description                              |
|------------|----------------------------------------------------|----------------------------------------------------------------------|
| fromItem   | [ItemLike](/vanilla/api/world/ItemLike)            | The secondary item that is being given to the villager               |
| fromCount  | int                                                | The amount of the secondary item that is being given to the villager |
| toItem     | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager                          |
| toCount    | int                                                | The amount of the item that is being sold by the villager            |
| maxUses    | int                                                | How many times can this trade be used                                |
| villagerXp | int                                                | How much experience does this trade reward the villager              |



```zenscript
new ItemsAndEmeraldsToItems(fromItem as ItemLike, fromCount as int, emeraldCost as int, toItem as ItemDefinition, toCount as int, maxUses as int, villagerXp as int) as ItemsAndEmeraldsToItems
new ItemsAndEmeraldsToItems(<item:minecraft:dirt>, 4, 2, <item:minecraft:diamond>, 1, 8, 2);
```
|  Parameter  |                        Type                        |                             Description                              |
|-------------|----------------------------------------------------|----------------------------------------------------------------------|
| fromItem    | [ItemLike](/vanilla/api/world/ItemLike)            | The secondary item that is being given to the villager               |
| fromCount   | int                                                | The amount of the secondary item that is being given to the villager |
| emeraldCost | int                                                | How many emeralds will be given to the villager                      |
| toItem      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager                          |
| toCount     | int                                                | The amount of the item that is being sold by the villager            |
| maxUses     | int                                                | How many times can this trade be used                                |
| villagerXp  | int                                                | How much experience does this trade reward the villager              |



