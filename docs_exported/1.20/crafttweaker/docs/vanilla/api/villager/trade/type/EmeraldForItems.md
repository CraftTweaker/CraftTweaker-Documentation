# EmeraldForItems

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.EmeraldForItems;
```


## Implemented Interfaces
EmeraldForItems implements the following interfaces. That means all methods defined in these interfaces are also available in EmeraldForItems

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new EmeraldForItems(item as ItemLike, cost as int, maxUses as int, villagerXp as int) as EmeraldForItems
new EmeraldForItems(<item:minecraft:diamond>, 1, 8, 2);
```
| Parameter  |                  Type                   |                       Description                       |
|------------|-----------------------------------------|---------------------------------------------------------|
| item       | [ItemLike](/vanilla/api/world/ItemLike) | The Item that is being given to the villager            |
| cost       | int                                     | How many emeralds does this trade cost                  |
| maxUses    | int                                     | How many times can this trade be used                   |
| villagerXp | int                                     | How much experience does this trade reward the villager |



